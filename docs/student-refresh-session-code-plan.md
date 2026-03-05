# Student Refresh Session-Code Plan (Review First)

This is a planning document only. It explains how to prevent stale or incorrect prefilled session codes after student refresh.

## Problem Summary

- Student refresh can appear to "lose" session context, even though rejoin by code and same ID usually works.
- In some refresh paths, the session code field is prefilled with an incorrect old value.
- Likely root cause: mixed route semantics between `join` code routes and `sessionId` routes, plus stale local storage.

## Proposed Approach

1. Split route intent clearly in the client.
   - `/#/join/:code` means "prefill code".
   - `/#/s/:sessionId` means "restore by sessionId".
   - Do not treat `sessionId` as a session code.

2. Split `StudentView` inputs.
   - Replace single `sessionCode` prop with explicit fields:
     - `initialSessionCode?`
     - `initialSessionId?`
   - Prefill code input only from `initialSessionCode`.

3. Harden local storage restore logic.
   - Keep `mdquiz_session` as authoritative for `sessionId`, `studentId`, `sessionToken`.
   - Optionally store `lastSessionCode` only when validated from `/api/session/by-code/:code`.
   - On restore failure (`not found` or `ended`), clear stale session artifacts in one place.

4. Add stale-data guardrails.
   - If route provides a code, prefer that over any cached code.
   - If route provides only sessionId and no valid matching code, leave code input blank.
   - Never derive code from UUID-like values.

5. Improve user feedback.
   - Show a concise notice when cached session was cleared due to expiry/end.
   - Keep quick rejoin path obvious (code + ID form remains available).

## Validation Plan

- Refresh on `/#/join/<VALID_CODE>` keeps the same code prefilled.
- Refresh on `/#/s/<SESSION_ID>` never shows UUID-derived garbage in code input.
- Stale cached session from previous class is cleared, then join form appears clean.
- Rejoin with same ID still succeeds (existing token/instance protections preserved).

## Acceptance Criteria

- Session code prefill is always deterministic and route-driven.
- No old unrelated code appears after refresh.
- Existing reconnect safety rules remain intact.
