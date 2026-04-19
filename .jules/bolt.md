## 2025-05-15 - Prefer native CSS for smooth scrolling
**Learning:** Using JavaScript's `scrollIntoView({ behavior: 'smooth' })` with `e.preventDefault()` often breaks native browser behavior like URL hash updates and can be less performant than the compositor-threaded CSS `scroll-behavior: smooth`.
**Action:** Always check if smooth scrolling can be implemented via CSS before reaching for a JavaScript solution, especially in static sites.
