import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync } from 'fs'

const client = createClient({
  projectId: '95kssyaz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

const slugs = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`)

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'))

pkg.reactSnap.include = [
  '/',
  '/about',
  '/services',
  '/international-tax',
  '/contact',
  '/faq',
  '/blog',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  ...slugs.map(s => `/blog/${s.slug}`)
]

writeFileSync('./package.json', JSON.stringify(pkg, null, 2))
console.log(`✅ Added ${slugs.length} blog post routes to react-snap`)
