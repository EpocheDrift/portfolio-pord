import { AccessionSurface } from "./AccessionSurface";
import { ClosedField } from "./ClosedField";
import { InfoPage } from "./InfoPage";
import { ProjectDetail } from "./ProjectDetail";
import { SignalQueue } from "./SignalQueue";
import { UtilityStrip } from "./UtilityStrip";
import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveText } from "../data/localization";
import { siteCopy } from "../data/siteCopy";
import type { AppRoute, InfoRoute } from "../routes/routeState";

type ArchiveShellProps = {
  activeIndex: number;
  activeProject: ProjectRecord;
  language: LanguageCode;
  projects: ProjectRecord[];
  route: AppRoute;
  onEnterArchive: () => void;
  onReturnArchive: () => void;
  onReturnClosed: () => void;
  onSelectProject: (index: number) => void;
  onToggleLanguage: () => void;
  onOpenProject: () => void;
  onOpenInfo: (kind: InfoRoute) => void;
};

export function ArchiveShell({
  activeIndex,
  activeProject,
  language,
  projects,
  route,
  onEnterArchive,
  onReturnArchive,
  onReturnClosed,
  onSelectProject,
  onToggleLanguage,
  onOpenProject,
  onOpenInfo,
}: ArchiveShellProps) {
  const isArchiveView = route.view === "closed" || route.view === "open";

  return (
    <main className={`archive-shell is-${route.view} lang-${language}`}>
      {isArchiveView ? (
        <section className="identity-panel" aria-label="Archive identity">
          <p className="system-kicker">{siteCopy.version}</p>
          <h1>{resolveText(siteCopy.title, language)}</h1>
          <p className="intro-copy">{resolveText(siteCopy.intro, language)}</p>
          <AccessionSurface
            activeIndex={activeIndex}
            activeProject={activeProject}
            isOpen={route.view === "open"}
            language={language}
            onSelectProject={onSelectProject}
            projects={projects}
          />
        </section>
      ) : null}

      {route.view === "closed" ? (
        <ClosedField language={language} onEnterArchive={onEnterArchive} />
      ) : null}

      {route.view === "open" ? (
        <SignalQueue
          activeIndex={activeIndex}
          language={language}
          onOpenProject={onOpenProject}
          onSelectProject={onSelectProject}
          projects={projects}
        />
      ) : null}

      {route.view === "project" ? (
        <ProjectDetail language={language} project={activeProject} onReturn={onReturnArchive} />
      ) : null}

      {(route.view === "about" || route.view === "contact") ? (
        <InfoPage kind={route.view} language={language} onReturn={onReturnArchive} />
      ) : null}

      <UtilityStrip
        language={language}
        onOpenInfo={onOpenInfo}
        onToggleLanguage={onToggleLanguage}
        state={route.view}
      />
      {route.view === "open" ? (
        <button className="archive-close-target" onClick={onReturnClosed} type="button">
          {resolveText(siteCopy.ui.closeField, language)}
        </button>
      ) : null}
    </main>
  );
}
