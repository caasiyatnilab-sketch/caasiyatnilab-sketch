## 2025-05-15 - Critical Path and Memory Efficiency
**Learning:** Moving scripts to the <head> with 'defer' and the <title> tag before stylesheets optimizes the Critical Rendering Path by allowing parallel fetching and earlier title rendering. Combining this with event delegation on container elements (like <nav>) significantly reduces memory overhead and improves performance on pages with many interactive elements.
**Action:** Always prefer 'defer' for non-blocking scripts and use event delegation for groups of similar interactive elements.
