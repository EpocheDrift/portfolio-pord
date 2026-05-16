import { TesseractField } from "../visual-anchor/TesseractField";
import type { LanguageCode } from "../data/contentTypes";
import { resolveText } from "../data/localization";
import { siteCopy } from "../data/siteCopy";

type ClosedFieldProps = {
  language: LanguageCode;
  onEnterArchive: () => void;
};

export function ClosedField({ language, onEnterArchive }: ClosedFieldProps) {
  return (
    <section className="closed-field" aria-label="Closed archive field">
      <div className="field-axis field-axis-vertical" />
      <div className="field-axis field-axis-horizontal" />
      <TesseractField mode="closed" onClick={onEnterArchive} />
      <p className="entry-cue">{resolveText(siteCopy.ui.enterArchive, language)}</p>
    </section>
  );
}
