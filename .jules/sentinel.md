## 2025-05-24 - Security Header Verification Strategy
**Vulnerability:** N/A (Security Enhancement)
**Learning:** For projects lacking a formal test suite or a JS-based testing framework (like vanilla HTML projects), adding a Python-based Playwright verification script may be seen as over-reaching due to introducing a new tech stack (Python) and heavy dependencies.
**Prevention:** Keep temporary verification scripts separate from the project's source tree and delete them before submission. For lightweight projects, rely on manual verification or lightweight bash-based checks if possible, or seek clarification if a permanent automated security test is desired.
