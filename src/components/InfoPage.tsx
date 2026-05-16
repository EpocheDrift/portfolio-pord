import { siteCopy } from "../data/siteCopy";
import type { LanguageCode } from "../data/contentTypes";
import { resolveText } from "../data/localization";
import { TesseractField } from "../visual-anchor/TesseractField";

type InfoPageProps = {
  kind: "about" | "contact";
  language: LanguageCode;
  onReturn: () => void;
};

export function InfoPage({ kind, language, onReturn }: InfoPageProps) {
  return (
    <section className="info-page" aria-label={kind}>
      <div className="info-copy">
        <p>{resolveText(siteCopy.ui.minimalInfoPage, language)}</p>
        <h2>{resolveText(kind === "about" ? siteCopy.ui.about : siteCopy.ui.contact, language)}</h2>
        <span>{resolveText(kind === "about" ? siteCopy.about : siteCopy.contact, language)}</span>
      </div>
      <TesseractField mode="info" onClick={onReturn} />
      <button className="return-link" onClick={onReturn} type="button">
        {resolveText(siteCopy.ui.returnArchive, language)}
      </button>
    </section>
  );
}
