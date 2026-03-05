# Funnel Readiness Check Plan (Review First)

This is a planning document only. It proposes a post-start verification flow to warn when classroom access is not actually ready.

## Problem Summary

- The server starts even when Tailscale Funnel is not active or is mapped to the wrong port.
- Current startup logs show access detection, but they do not guarantee that public student traffic reaches this exact process.
- This can cause "session not found" errors for students while instructor-side checks still look healthy.

## Proposed Approach

1. Add a runtime readiness checker module.
   - New server utility runs immediately after listen and access detection.
   - It evaluates funnel state plus related classroom pre-flight reminders.

2. Verify funnel state directly.
   - Read `tailscale funnel status --json` when available.
   - Confirm an active funnel exists for the bound port.
   - Confirm published hostname matches detected Tailscale host (when present).

3. Verify public route consistency.
   - Reuse existing instance-id health check (`GET <public-url>/api/health`).
   - Treat mismatch or timeout as not-ready and emit a high-visibility warning.

4. Print actionable warnings, not generic failures.
   - Include exactly what failed (`no active funnel`, `wrong port`, `host mismatch`, `health mismatch`).
   - Include next command(s), for example:
     - `tailscale funnel <boundPort>`
     - `tailscale funnel status`
     - restart with explicit `PORT=<expectedPort>`

5. Add a checklist reminder block after startup.
   - Confirm `INSTRUCTOR_PASSWORD` configured.
   - Confirm expected quiz file exists in `data/quizzes`.
   - Confirm student join URL uses current session code.
   - Keep reminder informational, but highlight blockers as warnings.

## Logging Contract

- Emit one structured line with status:
  - `funnel_ready=true|false`
  - `reason=<code>`
  - `bound_port=<n>`
  - `public_url=<url-or-empty>`
- Emit human-readable remediation lines immediately after when `false`.

## Validation Plan

- Case A: funnel up on correct port -> readiness passes, no warning.
- Case B: funnel absent -> warning includes exact command to recover.
- Case C: funnel on stale port -> warning names expected and actual port.
- Case D: public instance mismatch -> startup remains blocked (current safety behavior) or marked not-ready per policy.

## Acceptance Criteria

- After server start, instructor sees explicit readiness output before class.
- If funnel is not usable, logs clearly state that quiz access will fail until fixed.
- Warnings are actionable in one command cycle.
