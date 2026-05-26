## 2025-05-14 - Redundant DOMContentLoaded with defer
**Learning:** When using the `defer` attribute on script tags, the script is executed only after the DOM is fully parsed, making the `DOMContentLoaded` event listener redundant.
**Action:** Remove `DOMContentLoaded` wrappers when moving scripts to the head with `defer` to slightly reduce script execution time and complexity.
