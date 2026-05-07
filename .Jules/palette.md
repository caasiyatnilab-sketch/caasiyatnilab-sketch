## 2025-05-14 - Accessible Skip-to-Content Pattern
**Learning:** In projects using fixed headers or complex navigation, a "Skip to Content" link is a vital micro-UX improvement for keyboard/screen reader users. Hiding it off-screen (e.g., `top: -40px`) and sliding it into view on `:focus` provides a clean, non-intrusive UI for mouse users while maintaining accessibility.
**Action:** Always implement a semantic `<main>` tag with `tabindex="-1"` as the skip target to ensure focus is correctly managed when the link is activated.
