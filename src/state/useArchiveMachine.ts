import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { nextLanguage, persistLanguage, readStoredLanguage } from "../data/localization";
import {
  parseAppRoute,
  pathForRoute,
  routesMatch,
  type AppRoute,
  type InfoRoute,
} from "../routes/routeState";

const initialActiveId = "A01";
const wheelCooldownMs = 360;
const desktopWheelQuery = "(min-width: 861px)";

function clampIndex(index: number, length: number) {
  if (length <= 0) {
    return 0;
  }

  return (index + length) % length;
}

function shouldIgnoreKeyTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest("input, textarea, select, [contenteditable='true']"));
}

function getProjectIndexFromSlug(projects: ProjectRecord[], slug: string) {
  return projects.findIndex((project) => project.slug === slug && !project.detailDisabled);
}

function validateRoute(route: AppRoute, projects: ProjectRecord[]): AppRoute {
  if (route.view === "project" && getProjectIndexFromSlug(projects, route.slug) < 0) {
    return { view: "open" };
  }

  return route;
}

function getBrowserPathname() {
  return typeof window === "undefined" ? "/" : window.location.pathname;
}

function getRouteFromLocation(projects: ProjectRecord[]) {
  return validateRoute(parseAppRoute(getBrowserPathname()), projects);
}

function writeRouteToHistory(route: AppRoute, options: { replace?: boolean } = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const nextPath = pathForRoute(route);
  if (nextPath === window.location.pathname) {
    return;
  }

  const method = options.replace ? "replaceState" : "pushState";
  window.history[method]({ route }, "", nextPath);
}

export function useArchiveMachine(projects: ProjectRecord[]) {
  const fallbackIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === initialActiveId),
  );
  const [route, setRoute] = useState<AppRoute>(() => getRouteFromLocation(projects));
  const [activeIndex, setActiveIndex] = useState(() => {
    const initialRoute = getRouteFromLocation(projects);
    if (initialRoute.view === "project") {
      return getProjectIndexFromSlug(projects, initialRoute.slug);
    }

    return fallbackIndex;
  });
  const [language, setLanguage] = useState<LanguageCode>(readStoredLanguage);
  const wheelLocked = useRef(false);
  const wheelUnlockTimer = useRef<number | null>(null);

  const activeProject = useMemo(
    () => projects[activeIndex] ?? projects[0],
    [activeIndex, projects],
  ) as ProjectRecord;

  const syncProjectFromRoute = useCallback(
    (nextRoute: AppRoute) => {
      if (nextRoute.view !== "project") {
        return;
      }

      const nextIndex = getProjectIndexFromSlug(projects, nextRoute.slug);
      if (nextIndex >= 0) {
        setActiveIndex(nextIndex);
      }
    },
    [projects],
  );

  const navigate = useCallback(
    (nextRoute: AppRoute, options: { replace?: boolean } = {}) => {
      const validatedRoute = validateRoute(nextRoute, projects);

      setRoute((currentRoute) => {
        if (routesMatch(currentRoute, validatedRoute)) {
          return currentRoute;
        }

        return validatedRoute;
      });
      syncProjectFromRoute(validatedRoute);
      writeRouteToHistory(validatedRoute, options);
    },
    [projects, syncProjectFromRoute],
  );

  const focusProject = useCallback(
    (index: number, options: { open?: boolean } = {}) => {
      setActiveIndex(clampIndex(index, projects.length));
      if (options.open !== false) {
        navigate({ view: "open" });
      }
    },
    [navigate, projects.length],
  );

  const stepProject = useCallback(
    (direction: number, options: { open?: boolean } = {}) => {
      setActiveIndex((current) => clampIndex(current + direction, projects.length));
      if (options.open !== false) {
        navigate({ view: "open" });
      }
    },
    [navigate, projects.length],
  );

  const enterArchive = useCallback(() => {
    navigate({ view: "open" });
  }, [navigate]);

  const returnToArchive = useCallback(() => {
    navigate({ view: "open" });
  }, [navigate]);

  const returnToClosed = useCallback(() => {
    navigate({ view: "closed" });
  }, [navigate]);

  const openProject = useCallback(() => {
    if (!activeProject || activeProject.detailDisabled) {
      return;
    }

    navigate({ view: "project", slug: activeProject.slug });
  }, [activeProject, navigate]);

  const openInfo = useCallback((kind: InfoRoute) => {
    navigate({ view: kind });
  }, [navigate]);

  const toggleLanguage = useCallback(() => {
    setLanguage((current) => nextLanguage(current));
  }, []);

  useEffect(() => {
    persistLanguage(language);
  }, [language]);

  useEffect(() => {
    const validatedRoute = getRouteFromLocation(projects);
    syncProjectFromRoute(validatedRoute);
    setRoute(validatedRoute);
    writeRouteToHistory(validatedRoute, { replace: true });
  }, [projects, syncProjectFromRoute]);

  useEffect(() => {
    function handlePopState() {
      const nextRoute = getRouteFromLocation(projects);
      setRoute(nextRoute);
      syncProjectFromRoute(nextRoute);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [projects, syncProjectFromRoute]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (shouldIgnoreKeyTarget(event.target)) {
        return;
      }

      if (event.key === "Escape") {
        if (route.view === "closed") {
          return;
        }

        event.preventDefault();
        navigate(route.view === "open" ? { view: "closed" } : { view: "open" });
        return;
      }

      if (route.view === "project" || route.view === "about" || route.view === "contact") {
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        stepProject(1);
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        stepProject(-1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate, route.view, stepProject]);

  useEffect(() => {
    function releaseWheelLock() {
      wheelLocked.current = false;
      wheelUnlockTimer.current = null;
    }

    function handleWheel(event: WheelEvent) {
      if (route.view === "project" || route.view === "about" || route.view === "contact") {
        return;
      }

      if (!window.matchMedia(desktopWheelQuery).matches || Math.abs(event.deltaY) < 8) {
        return;
      }

      event.preventDefault();

      if (route.view === "closed") {
        navigate({ view: "open" });
        return;
      }

      if (wheelLocked.current) {
        return;
      }

      wheelLocked.current = true;
      stepProject(event.deltaY > 0 ? 1 : -1, { open: false });
      wheelUnlockTimer.current = window.setTimeout(releaseWheelLock, wheelCooldownMs);
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (wheelUnlockTimer.current !== null) {
        window.clearTimeout(wheelUnlockTimer.current);
      }
    };
  }, [navigate, route.view, stepProject]);

  return {
    activeIndex,
    activeProject,
    enterArchive,
    focusProject,
    language,
    openInfo,
    openProject,
    projects,
    returnToArchive,
    returnToClosed,
    route,
    toggleLanguage,
  };
}
