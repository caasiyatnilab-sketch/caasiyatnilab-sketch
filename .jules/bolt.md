# Bolt's Performance Journal

## 2026-06-17 - Portfolio Website Baseline
**Learning:** The current implementation uses individual event listeners for each navigation link and `document.querySelector` for ID-based navigation lookups.
**Action:** Replace with event delegation on the `<nav>` element and use `document.getElementById` for faster lookups.
