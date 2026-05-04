## 2025-05-15 - Native Smooth Scrolling and Focus Management
**Learning:** Replacing JavaScript-based `scrollIntoView({ behavior: 'smooth' })` with native CSS `scroll-behavior: smooth` and programmatic `element.focus()` improves performance by leveraging the compositor thread while maintaining accessibility.
**Action:** Prefer native CSS smooth scrolling and use `tabindex="-1"` on target sections to enable accessible focus management via `.focus()`.
