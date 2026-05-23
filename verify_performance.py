import asyncio
import os
from playwright.async_api import async_playwright

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Get absolute path to index.html
        path = os.path.abspath("projects/portfolio-website/index.html")
        url = f"file://{path}"

        await page.goto(url)

        # Verify initial load
        title = await page.title()
        print(f"Page title: {title}")
        assert "Portfolio Website" in title

        # Check if console logs "Portfolio website loaded successfully!"
        # We can listen to console events
        logs = []
        page.on("console", lambda msg: logs.append(msg.text))

        # Reload to capture initial logs if needed, but goto already triggered it
        # Actually, let's just check the logs after goto

        # Verify navigation/smooth scroll
        # Click on 'Projects' link
        projects_link = page.locator('nav a[href="#projects"]')
        await projects_link.click()

        # Since it's smooth scroll, we might need to wait a bit or check the scroll position
        # For simple verification, we check if the URL hash changed
        # Actually, the preventDefault is called only if the section exists.

        await page.wait_for_timeout(1000) # Wait for smooth scroll

        scroll_y = await page.evaluate("window.scrollY")
        print(f"Scroll Y: {scroll_y}")
        assert scroll_y > 0

        print("Test passed!")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run_test())
