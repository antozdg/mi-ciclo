import { CycleConfig } from "./cycle";

const KEY = "miciclo_config";

export function saveConfig(config: CycleConfig): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(config));
}

export function loadConfig(): CycleConfig | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CycleConfig;
  } catch {
    return null;
  }
}

export function clearConfig(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}

export function hasConfig(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) !== null;
}
