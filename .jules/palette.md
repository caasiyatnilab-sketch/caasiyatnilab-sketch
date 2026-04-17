## 2025-05-23 - Accessibility: Focus Management and Skip Links
**Learning:** For single-page navigation to be truly accessible, moving the visual viewport with smooth scroll is not enough. Programmatic focus must be moved to the target element (using `tabindex="-1"` and `.focus()`) so that screen readers and keyboard users' context is updated. Additionally, a skip-to-content link is essential for users to bypass navigation.
**Action:** Always implement explicit focus management in SPA/internal navigation and include a skip link as the first focusable element.
