import { ProjectTemplateCase } from "./ProjectTemplateCase";
import { ProjectTemplateSlab } from "./ProjectTemplateSlab";
import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveOptionalText, resolveText } from "../data/localization";
import { siteCopy } from "../data/siteCopy";

type ProjectDetailProps = {
  language: LanguageCode;
  project: ProjectRecord;
  onReturn: () => void;
};

export function ProjectDetail({ language, project, onReturn }: ProjectDetailProps) {
  const projectFormat =
    resolveOptionalText(project.formatLabel, language) ??
    project.format ??
    resolveOptionalText(project.typeLabel, language) ??
    project.type;

  return (
    <section className={`project-detail template-${project.template}`}>
      <header>
        <p>{resolveText(siteCopy.ui.projectDossier, language)} / {project.id}</p>
        <h2>{resolveText(project.title, language)}</h2>
        <div className="project-detail-summary">
          <span>{projectFormat}</span>
          <strong>{project.route}</strong>
        </div>
        <button onClick={onReturn} type="button">
          {resolveText(siteCopy.ui.returnQueue, language)}
        </button>
      </header>
      {project.template === "slab" ? (
        <ProjectTemplateSlab language={language} project={project} />
      ) : (
        <ProjectTemplateCase language={language} project={project} />
      )}
    </section>
  );
}
