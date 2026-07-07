## 2025-07-07 - Asset Overhead in Small Static Sites
**Learning:** For extremely small static sites (total assets < 5KB), the overhead of multiple HTTP requests (connection setup, TCP slow start, headers) is significantly higher than the transfer time of the data itself.
**Action:** Prioritize inlining CSS and JS into the HTML for small-scale projects to achieve 1-request delivery.
