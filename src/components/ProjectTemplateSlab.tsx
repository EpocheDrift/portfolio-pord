import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveOptionalText, resolveText } from "../data/localization";
import { getPrimaryProjectMedia } from "../data/projectMedia";
import { siteCopy } from "../data/siteCopy";

type ProjectTemplateProps = {
  language: LanguageCode;
  project: ProjectRecord;
};

export function ProjectTemplateSlab({ language, project }: ProjectTemplateProps) {
  const primaryMedia = getPrimaryProjectMedia(project);
  const plateCaption =
    resolveOptionalText(primaryMedia?.caption, language) ??
    resolveOptionalText(project.plateCaption, language) ??
    resolveText(siteCopy.ui.imagePending, language);

  return (
    <div className="project-template project-template-slab">
      <aside className="project-meta">
        {project.metadata.map((item) => (
          <p key={resolveText(item.label, language)}>
            <span>{resolveText(item.label, language)}</span>
            <strong>{resolveText(item.value, language)}</strong>
          </p>
        ))}
        {project.evidence ? (
          <div className="project-evidence">
            <span>{resolveText(siteCopy.ui.evidence, language)}</span>
            {project.evidence.map((item) => (
              <strong key={resolveText(item, language)}>{resolveText(item, language)}</strong>
            ))}
          </div>
        ) : null}
      </aside>
      <div className="slab-stack">
        <figure className="project-media-plate">
          {primaryMedia?.src ? (
            <img
              alt={resolveText(primaryMedia.alt, language)}
              src={primaryMedia.src}
            />
          ) : (
            <div aria-hidden="true" />
          )}
          <figcaption>{plateCaption}</figcaption>
        </figure>
        {project.sections.map((section, index) => (
          <article key={section.id}>
            <small>{String(index + 1).padStart(2, "0")} / {section.id}</small>
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
