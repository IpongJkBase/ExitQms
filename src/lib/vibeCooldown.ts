// One shared back-off for the QMS Network API on this server instance: after a 403/429 every caller
// (same-ticker search, top holders) stays away for a short while instead of piling on while QMS Network throttles.
// Callers treat "cooling down" as unknown, never as an empty answer.
const COOLDOWN_MS = 30_000;
let until = 0;

export function vibeCoolingDown(): boolean {
  return Date.now() < until;
}

/** call with the HTTP status of every QMS Network answer that wasn't ok */
export function noteVibeStatus(status: number): void {
  if (status === 403 || status === 429) until = Math.max(until, Date.now() + COOLDOWN_MS);
}