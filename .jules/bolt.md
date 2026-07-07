## 2025-05-14 - Script Deferral and Event Delegation
**Learning:** In static HTML projects, moving scripts to the `<head>` with the `defer` attribute allows parallel downloading and removes the need for `DOMContentLoaded` event listeners, streamlining initialization. Event delegation on the `<nav>` element further reduces initialization overhead compared to individual listeners.
**Action:** Always prefer `defer` and event delegation for navigation-heavy static sites to achieve sub-millisecond script initialization times.
