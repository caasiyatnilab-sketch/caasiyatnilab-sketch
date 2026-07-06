## 2025-05-15 - Optimizing Static Portfolio Loading
**Learning:** Moving scripts to the head with `defer` and using event delegation improves both the perceived and actual performance of static pages by allowing parallel resource loading and reducing script initialization overhead.
**Action:** Always prefer `defer` for non-critical scripts and use event delegation for navigation-heavy components.
