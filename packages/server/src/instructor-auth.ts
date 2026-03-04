import { randomBytes } from "crypto";

export const INSTRUCTOR_SESSION_COOKIE = "mdq_instructor_session";

const activeInstructorSessions = new Set<string>();

export function getConfiguredInstructorPassword(): string {
  return (process.env.INSTRUCTOR_PASSWORD || process.env.INSTRUCTOR_KEY || "").trim();
}

export function isInstructorAuthEnabled(): boolean {
  return getConfiguredInstructorPassword().length > 0;
}

export function verifyInstructorPassword(password: string): boolean {
  const configured = getConfiguredInstructorPassword();
  if (!configured) return true;
  return password === configured;
}

export function createInstructorSession(): string {
  const token = randomBytes(24).toString("hex");
  activeInstructorSessions.add(token);
  return token;
}

export function revokeInstructorSession(token: string): void {
  activeInstructorSessions.delete(token);
}

export function hasValidInstructorSession(token: string): boolean {
  return activeInstructorSessions.has(token);
}

export function parseCookieHeader(rawHeader?: string): Record<string, string> {
  const parsed: Record<string, string> = {};
  if (!rawHeader) return parsed;

  const parts = rawHeader.split(";");
  for (const part of parts) {
    const [rawName, ...rawValueParts] = part.trim().split("=");
    if (!rawName || rawValueParts.length === 0) continue;
    parsed[rawName] = decodeURIComponent(rawValueParts.join("="));
  }
  return parsed;
}

export function getInstructorSessionFromCookie(rawHeader?: string): string {
  const cookies = parseCookieHeader(rawHeader);
  return cookies[INSTRUCTOR_SESSION_COOKIE] || "";
}

export function clearInstructorSessionsForTests(): void {
  activeInstructorSessions.clear();
}
