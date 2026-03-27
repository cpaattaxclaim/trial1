import { createClient } from '@sanity/client'
import { writeFileSync } from 'fs'

const client = createClient({
  projectId: '95kssyaz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

const posts = await client.fetch(`
  *[_type == "post"] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt
  }
`)

const today = new Date().toISOString().split('T')[0]

const staticPages = [
  { loc: 'https://taxclaim.co/',                   priority: '1.0', lastmod: today },
  { loc: 'https://taxclaim.co/services',           priority: '0.9', lastmod: today },
  { loc: 'https://taxclaim.co/international-tax',  priority: '0.9', lastmod: today },
  { loc: 'https://taxclaim.co/about',              priority: '0.8', lastmod: today },
  { loc: 'https://taxclaim.co/contact',            priority: '0.8', lastmod: today },
  { loc: 'https://taxclaim.co/faq',                priority: '0.7', lastmod: today },
  { loc: 'https://taxclaim.co/blog',               priority: '0.7', lastmod: today },
  { loc: 'https://taxclaim.co/privacy-policy',     priority: '0.3', lastmod: today },
  { loc: 'https://taxclaim.co/terms-of-service',   priority: '0.3', lastmod: today },
  { loc: 'https://taxclaim.co/cookie-policy',      priority: '0.3', lastmod: today },
]

const blogPages = posts.map(post => ({
  loc: `https://taxclaim.co/blog/${post.slug}`,
  priority: '0.6',
  lastmod: post.publishedAt
    ? new Date(post.publishedAt).toISOString().split('T')[0]
    : today
}))

const allPages = [...staticPages, ...blogPages]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

writeFileSync('./public/sitemap.xml', xml)
console.log(`✅ Sitemap generated with ${allPages.length} URLs (${posts.length} blog posts)`)
