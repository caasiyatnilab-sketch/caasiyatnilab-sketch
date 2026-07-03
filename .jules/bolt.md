## 2025-05-15 - Optimizing Navigation and Resource Loading
**Learning:** JS-based smooth scrolling using `scrollIntoView({ behavior: 'smooth' })` and individual event listeners for each navigation link can lead to main-thread congestion. CSS-based `scroll-behavior: smooth` is more efficient. Also, scripts in the `<body>` without `defer` miss out on parallel downloading.
**Action:** Use CSS `scroll-behavior: smooth`, move scripts to `<head>` with `defer`, and implement event delegation for navigation links.
