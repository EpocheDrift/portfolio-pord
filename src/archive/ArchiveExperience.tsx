import { useEffect, useRef } from "react";
import { mountArchiveExperience } from "./archiveEngine";
import { archiveMarkup } from "./archiveMarkup";
import "./archiveShell.css";

export function ArchiveExperience() {
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shellRef.current) {
      return;
    }

    return mountArchiveExperience(shellRef.current);
  }, []);

  return (
    <div
      className="archive-experience"
      dangerouslySetInnerHTML={{ __html: archiveMarkup }}
      ref={shellRef}
    />
  );
}
