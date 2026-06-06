## 2025-05-15 - [Native Smooth Scroll and Focus Visibility]
**Learning:** Replacing manual JavaScript smooth scrolling with CSS `scroll-behavior: smooth` and `scroll-margin-top` provides a cleaner, more performant UX with less code. Additionally, explicit `:focus-visible` styles are essential for accessibility on dark/gradient backgrounds where default outlines may have poor contrast.
**Action:** Always check for redundant JS scrolling logic and prefer native CSS solutions. Ensure `:focus-visible` has high contrast against custom header backgrounds.
