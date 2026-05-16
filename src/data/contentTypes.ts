export type LanguageCode = "en" | "zh";

export type LocalizedText = {
  en: string;
  zh?: string;
};

export type ProjectTemplate = "slab" | "case";

export type ProjectMediaKind = "image" | "video" | "diagram" | "embed" | "placeholder";

export type ProjectMediaRole = "hero" | "plate" | "process" | "diagram" | "reference";

export type ProjectMetadataItem = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProjectSection = {
  id: string;
  title: LocalizedText;
  body: LocalizedText[];
  mediaIds?: string[];
};

export type ProjectMedia = {
  id: string;
  kind: ProjectMediaKind;
  src?: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  role?: ProjectMediaRole;
};

export type ProjectRecord = {
  id: string;
  slug: string;
  detailDisabled?: boolean;
  liveUrl?: string;
  title: LocalizedText;
  status: string;
  statusLabel?: LocalizedText;
  type: string;
  typeLabel?: LocalizedText;
  route: string;
  meta: string;
  code: string;
  format?: string;
  formatLabel?: LocalizedText;
  plateCaption?: LocalizedText;
  summary: LocalizedText;
  evidence?: LocalizedText[];
  template: ProjectTemplate;
  metadata: ProjectMetadataItem[];
  sections: ProjectSection[];
  media: ProjectMedia[];
};
