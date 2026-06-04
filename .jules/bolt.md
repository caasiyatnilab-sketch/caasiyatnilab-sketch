## 2025-05-14 - Critical Path and Event Handling Optimization
**Learning:** Placing the `<title>` tag before the stylesheet link in the `<head>` allows the browser to render the page title as early as possible, providing immediate visual feedback. Additionally, using event delegation for single-page navigation reduces memory overhead and improves initialization speed.
**Action:** Always prioritize resource ordering in the `<head>` and favor event delegation over multiple individual listeners for repeated elements like navigation links.
