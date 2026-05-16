import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveOptionalText, resolveText } from "../data/localization";
import { getPrimaryProjectMedia } from "../data/projectMedia";
import { siteCopy } from "../data/siteCopy";

type ProjectTemplateProps = {
  language: LanguageCode;
  project: ProjectRecord;
};

export function ProjectTemplateCase({ language, project }: ProjectTemplateProps) {
  const primaryMedia = getPrimaryProjectMedia(project);
  const plateCaption =
    resolveOptionalText(primaryMedia?.caption, language) ??
    resolveOptionalText(project.plateCaption, language) ??
    resolveText(siteCopy.ui.imagePending, language);
  const projectFormat =
    resolveOptionalText(project.formatLabel, language) ??
    project.format ??
    resolveOptionalText(project.typeLabel, language) ??
    project.type;

  return (
    <div className="project-template project-template-case">
      <div className="case-plate">
        <span>{project.code}</span>
        <strong>{projectFormat}</strong>
        {primaryMedia?.src ? (
          <img
            alt={resolveText(primaryMedia.alt, language)}
            src={primaryMedia.src}
          />
        ) : null}
        <p>{plateCaption}</p>
        {project.liveUrl ? (
          <a className="case-live-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            {language === "zh" ? "查看演示" : "live demo"} →
          </a>
        ) : null}
      </div>
      <div className="case-sections">
        {project.evidence ? (
          <article className="case-evidence">
            <small>{resolveText(siteCopy.ui.evidenceCompressed, language)}</small>
            <ul>
              {project.evidence.map((item) => (
                <li key={resolveText(item, language)}>{resolveText(item, language)}</li>
              ))}
            </ul>
          </article>
        ) : null}
        {project.sections.map((section) => (
          <article key={section.id}>
            <small>{section.id}</small>
            <h3>{resolveText(section.title, language)}</h3>
            {section.body.map((paragraph) => (
              <p key={resolveText(paragraph, language)}>{resolveText(paragraph, language)}</p>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}
