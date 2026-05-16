import { Fragment } from "react";
import { SignalCard } from "./SignalCard";
import { getSignalSlot } from "./signalSlots";
import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveText } from "../data/localization";
import { siteCopy } from "../data/siteCopy";

type SignalQueueProps = {
  activeIndex: number;
  language: LanguageCode;
  projects: ProjectRecord[];
  onSelectProject: (index: number) => void;
  onOpenProject: () => void;
};

export function SignalQueue({
  activeIndex,
  language,
  projects,
  onSelectProject,
  onOpenProject,
}: SignalQueueProps) {
  const processingFlowLines = resolveText(siteCopy.ui.processingFlow, language).split("\n");
  const processingFlow = processingFlowLines.map((line, index) => (
    <Fragment key={`${line}-${index}`}>
      {line}
      {index < processingFlowLines.length - 1 ? <br /> : null}
    </Fragment>
  ));

  return (
    <section className="signal-queue" aria-label="Project signal queue">
      <p className="queue-label">{resolveText(siteCopy.ui.verticalArchiveProcessing, language)}</p>
      <div className="signal-axis" />
      <p className="archive-caption">
        {resolveText(siteCopy.ui.archiveForm, language)}
        <strong>{processingFlow}</strong>
        <span>{resolveText(siteCopy.ui.queueSummary, language)}</span>
      </p>
      {projects.map((project, index) => {
        const delta = index - activeIndex;

        return (
          <SignalCard
            delta={delta}
            isActive={index === activeIndex}
            key={project.id}
            language={language}
            onClick={() =>
              index === activeIndex ? onOpenProject() : onSelectProject(index)
            }
            project={project}
            slot={getSignalSlot(delta)}
          />
        );
      })}
    </section>
  );
}
