## 2026-06-20 - Optimized Script Loading and Event Handling
**Learning:** Moving scripts to the <head> with 'defer' eliminates the need for 'DOMContentLoaded' wrappers while improving TTI by parallelizing downloads. Combining this with event delegation on the <nav> element reduces memory overhead by avoiding multiple redundant listeners.
**Action:** Always use 'defer' for non-critical scripts and prefer event delegation for groups of similar interactive elements like navigation links.
