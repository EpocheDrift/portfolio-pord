import type { ProjectMedia, ProjectRecord } from "./contentTypes";

export function getPrimaryProjectMedia(project: ProjectRecord): ProjectMedia | undefined {
  return (
    project.media.find((item) => item.role === "hero") ??
    project.media.find((item) => item.role === "plate") ??
    project.media[0]
  );
}
