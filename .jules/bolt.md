## 2025-05-14 - Event Delegation for Navigation
**Learning:** Implementing event delegation on the `<nav>` element instead of individual `<a>` tags reduces memory overhead and initial execution time. Using `event.target.closest('a')` ensures that clicks on elements nested inside anchors are still captured. Robust checks for `href` (starting with '#' and length > 1) prevent errors with empty hashes or external links.
**Action:** Always prefer event delegation for groups of similar interactive elements, and use `closest()` with defensive `href` checks to ensure both performance and reliability.
