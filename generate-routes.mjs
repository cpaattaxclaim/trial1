import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync } from 'fs'

const client = createClient({
  projectId: '95kssyaz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
})

// Blog post routes are handled by prerender-blog.mjs, not react-snap
// react-snap only handles static routes below
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
]

writeFileSync('./package.json', JSON.stringify(pkg, null, 2))
console.log('✅ Static routes set for react-snap (blog posts handled by prerender-blog.mjs)')
