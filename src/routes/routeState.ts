export type InfoRoute = "about" | "contact";

export type AppRoute =
  | { view: "closed" }
  | { view: "open" }
  | { view: "project"; slug: string }
  | { view: InfoRoute };

export const archivePath = "/archive";

export function isInfoRoute(route: AppRoute): route is { view: InfoRoute } {
  return route.view === "about" || route.view === "contact";
}

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

export function parseAppRoute(pathname: string): AppRoute {
  const normalizedPath = normalizePathname(pathname);

  if (normalizedPath === "/") {
    return { view: "closed" };
  }

  if (normalizedPath === archivePath) {
    return { view: "open" };
  }

  if (normalizedPath === "/about") {
    return { view: "about" };
  }

  if (normalizedPath === "/contact") {
    return { view: "contact" };
  }

  const projectMatch = normalizedPath.match(/^\/projects\/([^/]+)$/);
  if (projectMatch) {
    return { view: "project", slug: decodeURIComponent(projectMatch[1]) };
  }

  return { view: "open" };
}

export function pathForRoute(route: AppRoute): string {
  if (route.view === "closed") {
    return "/";
  }

  if (route.view === "open") {
    return archivePath;
  }

  if (route.view === "project") {
    return `/projects/${encodeURIComponent(route.slug)}`;
  }

  return `/${route.view}`;
}

export function routesMatch(first: AppRoute, second: AppRoute): boolean {
  if (first.view !== second.view) {
    return false;
  }

  if (first.view === "project" && second.view === "project") {
    return first.slug === second.slug;
  }

  return true;
}
