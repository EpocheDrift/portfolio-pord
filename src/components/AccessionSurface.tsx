import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveOptionalText, resolveText } from "../data/localization";
import { siteCopy } from "../data/siteCopy";

type AccessionSurfaceProps = {
  activeIndex: number;
  activeProject: ProjectRecord;
  isOpen: boolean;
  language: LanguageCode;
  projects: ProjectRecord[];
  onSelectProject: (index: number) => void;
};

export function AccessionSurface({
  activeIndex,
  activeProject,
  isOpen,
  language,
  projects,
  onSelectProject,
}: AccessionSurfaceProps) {
  const activeStatus =
    resolveOptionalText(activeProject.statusLabel, language) ?? activeProject.status;
  const activeType =
    resolveOptionalText(activeProject.typeLabel, language) ?? activeProject.type;

  if (!isOpen) {
    return (
      <section className="accession-surface is-closed" aria-label="Accession surface">
        <p className="surface-label">{resolveText(siteCopy.ui.accessionSurface, language)}</p>
        <div className="system-readout">
          <span>CS-A01</span>
          <strong>chaostudio</strong>
          <em>{resolveText(siteCopy.ui.closedBatch, language)}</em>
        </div>
      </section>
    );
  }

  return (
    <section className="accession-surface is-open" aria-label="Active accession">
      <p className="surface-label">{resolveText(siteCopy.ui.activeAccession, language)}</p>
      <dl>
        <div>
          <dt>{resolveText(siteCopy.ui.active, language)}</dt>
          <dd>{resolveText(activeProject.title, language)}</dd>
        </div>
        <div>
          <dt>{resolveText(siteCopy.ui.projectState, language)}</dt>
          <dd>{activeStatus}</dd>
        </div>
        <div>
          <dt>{resolveText(siteCopy.ui.projectType, language)}</dt>
          <dd>{activeType}</dd>
        </div>
        <div>
          <dt>{resolveText(siteCopy.ui.route, language)}</dt>
          <dd>{activeProject.route}</dd>
        </div>
      </dl>
      <div className="signal-register" aria-label={resolveText(siteCopy.ui.projectSignals, language)}>
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          const isDisabled = project.detailDisabled === true;
          const projectStatus =
            resolveOptionalText(project.statusLabel, language) ?? project.status;

          return (
            <button
              className={[
                "signal-row",
                isActive ? "active-row" : "",
                isDisabled ? "is-disabled" : "",
              ].filter(Boolean).join(" ")}
              disabled={isDisabled}
              key={project.id}
              onClick={() => onSelectProject(index)}
              type="button"
            >
              <span>{project.id}</span>
              <strong className={isActive ? "active" : ""}>
                {resolveText(project.title, language)}
              </strong>
              <span>{isActive ? resolveText(siteCopy.ui.active, language) : projectStatus}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
