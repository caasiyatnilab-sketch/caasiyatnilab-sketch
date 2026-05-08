## 2025-05-15 - Accessible Smooth Scrolling Focus Management
**Learning:** Intercepting link clicks for custom smooth scrolling breaks the browser's native focus management. Target elements (e.g., sections) are not automatically focused, leaving keyboard and screen reader users at the starting point.
**Action:** Always add 'tabindex="-1"' to target elements and call '.focus({ preventScroll: true })' on the target after initiating or completing a custom scroll to maintain accessibility without interrupting animations.
