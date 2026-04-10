## 2025-05-14 - Skip-to-content link implementation
**Learning:** For static sites with navigation, a skip-to-content link is a high-impact, low-effort accessibility win. Using tabindex="-1" on the target <main> element ensures that focus is moved programmatically in all browsers, and adding 'main:focus { outline: none; }' prevents a flash of focus ring on the entire content area while still allowing the focus to be correctly set for keyboard navigation.
**Action:** Always include a skip-to-content link as one of the first elements in the <body> for keyboard-heavy or navigation-rich pages.
