## 2025-05-14 - [Redundant Event Listeners]
**Learning:** Using 'DOMContentLoaded' inside a script loaded with the 'defer' attribute is redundant, as 'defer' scripts are executed only after the DOM is fully parsed.
**Action:** Can safely remove 'DOMContentLoaded' wrappers when 'defer' is used to slightly reduce initialization overhead.
