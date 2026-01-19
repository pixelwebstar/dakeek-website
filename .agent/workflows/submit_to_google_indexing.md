---
description: How to submit the website sitemap to Google Search Console for indexing
---

# How to Index Your Site on Google

Since I cannot access your private Google Search Console account, you must perform this step manually. I have already confirmed that your sitemap is generated correctly and pushed to the live site.

## Prerequisites
- You must have a **Google Search Console** account verified for `https://www.dakeek.ae`.

## Steps

1.  **Open Google Search Console**
    - Go to: [https://search.google.com/search-console](https://search.google.com/search-console)
    - Select your property (`dakeek.ae`).

2.  **Navigate to Sitemaps**
    - In the left sidebar, under the **Indexing** section, click on **Sitemaps**.

3.  **Submit the Sitemap URL**
    - You will see a box that says **"Add a new sitemap"**.
    - Enter `sitemap.xml` in the text field.
    - The full URL should look like: `https://www.dakeek.ae/sitemap.xml`
    - Click **SUBMIT**.

4.  **Verify Status**
    - Google will process it immediately.
    - You should see a status of **"Success"**.
    - If it says "Couldn't fetch", wait 10 minutes (Vercel deployment might still be propagating) and try again.

## What This Does
This tells Google to look at the file I just updated, which contains links to **all** your pages (Home, About, Services, Coverage, and every Area-Service combination). Google will then crawl and index them over the next few days.
