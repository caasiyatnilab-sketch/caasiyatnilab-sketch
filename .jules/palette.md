## 2025-05-14 - Accessible Smooth Scroll Navigation
**Learning:** Purely visual smooth scrolling via JS or CSS often leaves keyboard and screen reader focus on the triggering element, creating a disconnect. To make single-page navigation truly accessible, focus must be programmatically moved to the target section.
**Action:** Add 'tabindex="-1"' and 'aria-labelledby' to target sections, and use '.focus({ preventScroll: true })' in the navigation event handler to shift focus without disrupting the smooth scroll animation.
