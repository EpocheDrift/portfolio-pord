import type { CSSProperties } from "react";
import type { LanguageCode, ProjectRecord } from "../data/contentTypes";
import { resolveText } from "../data/localization";
import type { SignalSlot } from "./signalSlots";

type SignalCardProps = {
  delta: number;
  isActive: boolean;
  language: LanguageCode;
  project: ProjectRecord;
  slot: SignalSlot | null;
  onClick: () => void;
};

type SignalCardStyle = CSSProperties & {
  "--alpha": string;
  "--bite": string;
  "--scale": string;
  "--shift": string;
  "--w": string;
  "--y": string;
};

export function SignalCard({
  delta,
  isActive,
  language,
  project,
  slot,
  onClick,
}: SignalCardProps) {
  const isVisible = Boolean(slot);
  const tone = slot?.tone ?? "latent";
  const style: SignalCardStyle = {
    "--alpha": slot?.alpha ?? "0",
    "--bite": isActive ? "54px" : "30px",
    "--scale": slot?.scale ?? "0.68",
    "--shift": slot?.shift ?? "0px",
    "--w": slot?.width ?? "360px",
    "--y": slot?.y ?? (delta < 0 ? "-8%" : "94%"),
    zIndex: isActive ? 12 : Math.max(1, 7 - Math.abs(delta)),
  };

  return (
    <button
      className={[
        "signal-card",
        `tone-${tone}`,
        isActive ? "is-active" : "is-strip",
        isVisible ? "" : "is-hidden",
      ].filter(Boolean).join(" ")}
      data-delta={delta}
      onClick={onClick}
      style={style}
      type="button"
    >
      <small>{project.meta}</small>
      <strong>{resolveText(project.title, language)}</strong>
      <span className="route-code">{project.code}</span>
      {isActive ? <p>{resolveText(project.summary, language)}</p> : null}
    </button>
  );
}
