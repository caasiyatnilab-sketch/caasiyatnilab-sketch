## 2025-05-15 - Native CSS Smooth Scrolling
**Learning:** Native CSS `scroll-behavior: smooth` is more performant than JavaScript-based implementations because it's handled by the browser's compositor thread, reducing main-thread work. It also simplifies the codebase by allowing the removal of redundant JS.
**Action:** Always prefer native CSS for smooth scrolling unless complex custom easing or callback logic is required.

## 2025-05-15 - Patching Minified/Unformatted CSS
**Learning:** Using `replace_with_git_merge_diff` on files with very long lines or inconsistent formatting (like semi-minified CSS) can be error-prone. The SEARCH block must match the exact character sequence.
**Action:** Use `cat` with `od -c` to inspect the exact characters (tabs vs spaces, newlines) before applying patches to such files, or consider rewriting the file if it's small.
