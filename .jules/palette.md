## 2025-01-24 - Accessible Navigation and Focus Management
**Learning:** In single-page layouts with smooth scrolling, simply scrolling to a section is insufficient for screen reader and keyboard users. Programmatic focus management (using `tabindex="-1"` and `element.focus()`) is required to ensure the focus follows the visual transition, allowing users to continue navigating from the new location.
**Action:** Always pair in-page smooth scrolling with focus management and update the URL hash using `history.pushState` to maintain a consistent user experience.
