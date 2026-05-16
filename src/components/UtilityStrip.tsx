import { utilityNavigation } from "../data/navigation";
import type { LanguageCode } from "../data/contentTypes";
import { languageToggleLabel, resolveText } from "../data/localization";
import { siteCopy } from "../data/siteCopy";
import type { AppRoute, InfoRoute } from "../routes/routeState";

type UtilityStripProps = {
  language: LanguageCode;
  state: AppRoute["view"];
  onOpenInfo: (kind: InfoRoute) => void;
  onToggleLanguage: () => void;
};

export function UtilityStrip({
  language,
  state,
  onOpenInfo,
  onToggleLanguage,
}: UtilityStripProps) {
  const viewLabel = {
    closed: siteCopy.ui.viewClosed,
    open: siteCopy.ui.viewOpen,
    project: siteCopy.ui.viewProject,
    about: siteCopy.ui.viewAbout,
    contact: siteCopy.ui.viewContact,
  }[state];

  return (
    <nav className="utility-strip" aria-label="Archive utility controls">
      <div>
        <span>{resolveText(siteCopy.ui.state, language)}</span>
        <strong>{resolveText(viewLabel, language)}</strong>
      </div>
      {utilityNavigation.map((item) => (
        <a
          href={`/${item.id}`}
          key={item.id}
          onClick={(event) => {
            event.preventDefault();
            onOpenInfo(item.id);
          }}
        >
          {resolveText(item.label, language)}
        </a>
      ))}
      <button
        onClick={onToggleLanguage}
        type="button"
        aria-label={resolveText(siteCopy.ui.languageToggle, language)}
      >
        {languageToggleLabel(language)}
      </button>
    </nav>
  );
}
