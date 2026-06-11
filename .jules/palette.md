# Palette UX Journal

## 2025-06-11 - Initializing Journal
Initialized the UX journal for the portfolio website project.

## 2025-06-11 - Enhancing Scroll-Spy Navigation
**Learning:** For a robust "scroll-spy" navigation, `IntersectionObserver` with a fine-tuned `rootMargin` (e.g., `-10% 0px -70% 0px`) is superior to a simple scroll event listener. It correctly identifies the active section even when multiple sections are partially visible, particularly for shorter sections or at the top/bottom of the page. Combining this with `:focus-visible` ensures both mouse and keyboard users receive immediate, clear feedback.
**Action:** Use `rootMargin` to focus on the top third of the viewport for active section detection. Always pair visual active states with accessibility improvements like `:focus-visible`.
