## 2024-05-20 - Skip-to-content Link Implementation
**Learning:** Implementing a "Skip to main content" link is a high-impact, low-effort accessibility win for keyboard users, especially when the navigation is the first set of interactive elements. Using `top: -offset` with a `transition` allows the link to remain accessible to screen readers while staying hidden from sighted mouse users until needed.
**Action:** Always check for the presence of a skip link and a `<main>` landmark in single-page applications or sites with repeated navigation headers.
