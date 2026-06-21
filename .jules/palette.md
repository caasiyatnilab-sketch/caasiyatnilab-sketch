# Palette's UX Journal

## 2025-05-14 - Reliability of ScrollSpy in Headless Testing
**Learning:** In headless testing environments (e.g., Playwright), ScrollSpy functionality using `IntersectionObserver` can be flaky if the `rootMargin` or `threshold` are too strict, as elements might not perfectly align with the viewport during automated scrolling.
**Action:** Use a generous `rootMargin` (like `-20% 0px -20% 0px`) and manually set the active class on click events to ensure immediate and reliable visual feedback.
