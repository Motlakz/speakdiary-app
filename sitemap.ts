import type { MetadataRoute } from "next"

const SITE_URL = "https://speakdiary.com"

// Last-modified dates — update these when content changes significantly
const NOW = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core landing page ────────────────────────────────────────────────
    {
      url: SITE_URL,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Landing page section anchors ─────────────────────────────────────
    // These help search engines understand page sections and can earn
    // sitelinks in the SERP for brand queries.
    {
      url: `${SITE_URL}/#about`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/#features`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/#pricing`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── Legal & policy pages ─────────────────────────────────────────────
    // Always included — required by app stores and trusted by crawlers.
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: "2026-02-23",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: "2026-02-23",
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/refund-policy`,
      lastModified: "2026-02-23",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookie-policy`,
      lastModified: "2026-02-23",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/accessibility`,
      lastModified: "2026-02-23",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
