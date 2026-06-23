## 2025-05-14 - Script Loading and Event Delegation Optimization
**Learning:** Moving scripts to the `<head>` with the `defer` attribute allows for parallel download with HTML parsing, improving Time to Interactive (TTI). Event delegation on a common parent reduces the number of event listeners and memory usage, especially for navigation menus.
**Action:** Always prefer `defer` over placing scripts at the end of `<body>` for better loading performance. Use event delegation for lists of interactive elements like navigation links.
