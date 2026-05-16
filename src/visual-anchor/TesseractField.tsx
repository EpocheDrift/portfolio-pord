import { tesseractSegments } from "./tesseractGeometry";

type TesseractFieldProps = {
  mode: "closed" | "open" | "info";
  onClick?: () => void;
};

export function TesseractField({ mode, onClick }: TesseractFieldProps) {
  return (
    <button
      className={`tesseract-field tesseract-field-${mode}`}
      onClick={onClick}
      type="button"
      aria-label={mode === "closed" ? "Enter archive" : "Archive visual anchor"}
    >
      <svg viewBox="0 0 100 100" role="img" aria-hidden="true">
        {tesseractSegments.map((segment, index) => (
          <line
            className={`tesseract-segment tesseract-segment-${segment.weight}`}
            key={`${segment.x1}-${segment.y1}-${index}`}
            x1={segment.x1}
            x2={segment.x2}
            y1={segment.y1}
            y2={segment.y2}
          />
        ))}
      </svg>
    </button>
  );
}
