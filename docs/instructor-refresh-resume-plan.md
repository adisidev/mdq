# Instructor Refresh Resume Plan (Review First)

This is a planning document only. It describes how to make instructor page refreshes resume the active session safely.

## Problem Summary

- Current instructor session state lives in React memory (`InstructorView` state).
- A browser refresh clears that memory, so the UI returns to setup even when the server session is still active.
- The instructor can still control the session via server APIs, but there is no restore flow in the UI.

## Proposed Approach

1. Persist minimal restore context in browser storage.
   - Store `sessionId`, `sessionCode`, `week`, and `createdAt` in `sessionStorage` under an instructor-specific key.
   - Keep this record small and non-sensitive (no password/token).

2. Add a server endpoint for authenticated instructor restore.
   - Add `GET /api/session/:id/state` (instructor-auth required).
   - Return current session state, current question index, quiz metadata (`week`, title, question count), participant count, and access info.

3. Add instructor boot-time restore flow.
   - On `InstructorView` mount: read restore record, call restore endpoint.
   - If valid, repopulate `sessionInfo`, selected quiz, total questions, and phase.
   - If not found/ended/unauthorized, clear stale restore record and continue to normal setup.

4. Keep restore record fresh.
   - Update stored record after create/start/next/reveal/leaderboard transitions.
   - Clear record when session ends or when instructor clicks back-to-setup.

5. Add explicit UX affordance.
   - Show "Resumed active session" banner after successful restore.
   - Show a clear fallback message if restore fails (for example stale tab or session already ended).

## Safety and Edge Cases

- Multiple instructor tabs: last write wins for local restore record, server remains source of truth.
- Session ended while tab was closed: restore endpoint should return ended state or 404; client clears record.
- Instructor auth expired: endpoint returns 401, existing login flow continues.

## Validation Plan

- Manual:
  - Create session, join students, refresh instructor page during each state (`LOBBY`, `QUESTION_OPEN`, `REVEAL`, `LEADERBOARD`).
  - Confirm controls and counters match pre-refresh server state.
  - Confirm ended sessions do not auto-restore.
- Automated:
  - Server route tests for `GET /api/session/:id/state` auth/session-state behavior.
  - Client test for restore record lifecycle (set, restore, clear on end).

## Acceptance Criteria

- Refreshing instructor page during an active session restores control view without creating a second session.
- Restore never bypasses instructor authentication.
- Stale records self-heal (auto-cleared when invalid).
