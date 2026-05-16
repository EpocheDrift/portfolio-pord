export type Segment = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  weight: "primary" | "secondary";
};

export const tesseractSegments: Segment[] = [
  { x1: 18, y1: 32, x2: 56, y2: 12, weight: "secondary" },
  { x1: 56, y1: 12, x2: 86, y2: 34, weight: "primary" },
  { x1: 86, y1: 34, x2: 72, y2: 76, weight: "primary" },
  { x1: 72, y1: 76, x2: 26, y2: 70, weight: "primary" },
  { x1: 26, y1: 70, x2: 18, y2: 32, weight: "primary" },
  { x1: 34, y1: 42, x2: 58, y2: 28, weight: "primary" },
  { x1: 58, y1: 28, x2: 74, y2: 44, weight: "primary" },
  { x1: 74, y1: 44, x2: 61, y2: 62, weight: "primary" },
  { x1: 61, y1: 62, x2: 39, y2: 57, weight: "primary" },
  { x1: 39, y1: 57, x2: 34, y2: 42, weight: "primary" },
  { x1: 18, y1: 32, x2: 34, y2: 42, weight: "secondary" },
  { x1: 56, y1: 12, x2: 58, y2: 28, weight: "secondary" },
  { x1: 86, y1: 34, x2: 74, y2: 44, weight: "secondary" },
  { x1: 72, y1: 76, x2: 61, y2: 62, weight: "secondary" },
  { x1: 26, y1: 70, x2: 39, y2: 57, weight: "secondary" },
];
