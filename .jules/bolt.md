## 2026-06-28 - Resource and Rendering Optimization
**Learning:** Even small static sites can benefit from resource hints and rendering isolation. Using `defer` for scripts in the head and `contain: content` for layout sections provides measurable wins in Critical Rendering Path and browser paint efficiency. A data URI favicon is a simple way to eliminate a redundant 404 network request.
**Action:** Always check for redundant network requests (like missing favicons) and apply CSS containment to logical document sections to optimize the browser's rendering pipeline.
