import type { LocalizedText } from "./contentTypes";
import type { InfoRoute } from "../routes/routeState";

export const utilityNavigation = [
  { id: "about", label: { en: "ABOUT", zh: "关于" } },
  { id: "contact", label: { en: "CONTACT", zh: "联系" } },
] satisfies Array<{ id: InfoRoute; label: LocalizedText }>;
