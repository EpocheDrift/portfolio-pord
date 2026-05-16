export type SignalTone = "latent" | "queued" | "active" | "output";

export type SignalSlot = {
  y: string;
  shift: string;
  scale: string;
  alpha: string;
  width: string;
  tone: SignalTone;
};

const signalSlots = {
  "-2": { y: "16%", shift: "86px", scale: "0.78", alpha: "0.18", width: "420px", tone: "latent" },
  "-1": { y: "30%", shift: "74px", scale: "0.86", alpha: "0.48", width: "430px", tone: "queued" },
  "0": { y: "43%", shift: "24px", scale: "1", alpha: "1", width: "540px", tone: "active" },
  "1": { y: "63%", shift: "72px", scale: "0.88", alpha: "0.52", width: "420px", tone: "output" },
  "2": { y: "76%", shift: "72px", scale: "0.76", alpha: "0.3", width: "400px", tone: "output" },
} as const satisfies Record<string, SignalSlot>;

export function getSignalSlot(delta: number): SignalSlot | null {
  return signalSlots[String(delta) as keyof typeof signalSlots] ?? null;
}
