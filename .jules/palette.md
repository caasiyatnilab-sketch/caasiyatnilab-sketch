## 2025-05-14 - Accessible Smooth Scrolling
**Learning:** Standard smooth scrolling implementations (CSS or basic JS `scrollIntoView`) only move the viewport, not the focus. This creates a confusing experience for keyboard and screen reader users who expect focus to follow the visual jump.
**Action:** Always implement a JavaScript wrapper for smooth scroll links that programmatically moves focus to the target element (using `tabindex="-1"` if necessary) and updates the URL hash to maintain browser history consistency.
