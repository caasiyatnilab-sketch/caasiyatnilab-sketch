## 2025-05-14 - Optimized Critical Rendering Path and Event Delegation

**Learning:** Moving scripts to the <head> with 'defer' allows the browser to download scripts in parallel with HTML parsing, improving TTI. This also makes the 'DOMContentLoaded' event listener redundant.

**Action:** Always prefer 'defer' for non-critical scripts and use event delegation on parent containers to minimize the number of event listeners attached to the DOM.
