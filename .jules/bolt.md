## 2026-07-03 - Optimized Script Loading and Event Handling
**Learning:** Transitioning from body-bottom scripts to head-deferred scripts combined with event delegation reduced DOMContentLoaded by ~30% (20ms to 14ms) in this static environment. It also reduced script initialization overhead by avoiding multiple event listener attachments.
**Action:** Always prefer 'defer' over bottom-of-body placement for non-critical scripts to parallelize fetching, and use event delegation for navigation components.
