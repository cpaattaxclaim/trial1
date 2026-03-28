import { createClient } from '@sanity/client'
import { toHTML } from '@portabletext/to-html'
import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const client = createClient({
  projectId: '95kssyaz',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
})

const POSTS_QUERY = `*[_type == "post"] {
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  readTime,
  category->{ title },
  author->{ name },
  body,
  mainImage { asset->{ url } },
  ctaText,
  ctaButtonLabel,
  seo {
    title,
    description,
    ogImage { asset->{ url } }
  }
}`

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const CATEGORY_ICON_PATHS = {
  'Foreign Owner Tax Guide': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  'US Tax Filings & Requirements': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
  'Cross-Border Reporting & Compliance': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  'Compliance & Operations': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  'US Entity Formation': `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
}

const portableTextToHtml = (body) => {
  if (!body) return '<p class="text-gray-500">No content available.</p>'
  try {
    return toHTML(body, {
      components: {
        block: {
          normal: ({ children }) => `<p class="mb-4 text-gray-700 leading-relaxed text-justify">${children}</p>`,
          h2: ({ children }) => `<h2 class="text-2xl text-slate-900 mt-10 mb-4">${children}</h2>`,
          h3: ({ children }) => `<h3 class="text-xl text-slate-900 mt-8 mb-3">${children}</h3>`,
          blockquote: ({ children }) => `<blockquote class="border-l-4 border-teal-500 pl-4 italic text-gray-600 my-6">${children}</blockquote>`,
        },
        marks: {
          strong: ({ children }) => `<strong class="font-semibold text-slate-900">${children}</strong>`,
          em: ({ children }) => `<em class="italic">${children}</em>`,
          link: ({ children, value }) => `<a href="${value?.href ?? ''}" target="_blank" rel="noopener noreferrer" class="text-teal-600 underline hover:text-teal-700">${children}</a>`,
        },
        types: {
          image: ({ value }) => {
            const url = value?.asset?.url
            if (!url) return ''
            return `<figure class="my-8"><img src="${url}?w=800&auto=format" alt="${value.alt || ''}" class="w-full rounded-xl" loading="lazy" />${value.caption ? `<figcaption class="text-center text-sm text-gray-500 mt-2">${value.caption}</figcaption>` : ''}</figure>`
          },
        },
        list: {
          bullet: ({ children }) => `<ul class="list-disc pl-6 mb-4 space-y-2 text-gray-700">${children}</ul>`,
          number: ({ children }) => `<ol class="list-decimal pl-6 mb-4 space-y-2 text-gray-700">${children}</ol>`,
        },
        listItem: {
          bullet: ({ children }) => `<li class="text-justify">${children}</li>`,
          number: ({ children }) => `<li class="text-justify">${children}</li>`,
        },
      },
    })
  } catch (e) {
    console.error('PortableText error:', e)
    return '<p class="text-gray-500">Content could not be rendered.</p>'
  }
}

const buildPostHTML = (post, templateHTML) => {
  const seoTitle = post.seo?.title ?? `${post.title} | TaxClaim CPA Blog`
  const seoDesc = post.seo?.description ?? post.excerpt ?? 'Expert tax insights from TaxClaim CPA.'
  const seoImage = post.seo?.ogImage?.url ?? post.mainImage?.asset?.url ?? 'https://taxclaim.co/og-image.png'
  const canonical = `https://taxclaim.co/blog/${post.slug.current}`
  const categoryTitle = post.category?.title ?? ''
  const icon = CATEGORY_ICON_PATHS[categoryTitle] ?? CATEGORY_ICON_PATHS['US Tax Filings & Requirements']
  const bodyHTML = portableTextToHtml(post.body)
  const mainImageHTML = post.mainImage?.asset?.url
    ? `<img src="${post.mainImage.asset.url}?w=800&auto=format" srcset="${post.mainImage.asset.url}?w=400&auto=format 400w, ${post.mainImage.asset.url}?w=800&auto=format 800w, ${post.mainImage.asset.url}?w=1200&auto=format 1200w" sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px" alt="${post.title}" class="w-full rounded-xl mb-10" loading="lazy" />`
    : ''

  const articleHTML = `
<div class="min-h-screen bg-white">
  <!-- Header placeholder - React will hydrate -->
  <main>
    <article itemscope itemtype="https://schema.org/BlogPosting">
      <meta itemprop="datePublished" content="${post.publishedAt ?? ''}">
      ${post.author?.name ? `<meta itemprop="author" content="${post.author.name}">` : ''}
      <meta itemprop="image" content="${seoImage}">
      <section class="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/blog" class="inline-flex items-center text-teal-400 hover:text-teal-300 mb-6 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="mr-1"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Blog
          </a>
          ${categoryTitle ? `<div class="mb-4"><span class="inline-block px-3 py-1 bg-teal-600 text-white rounded-full text-xs">${categoryTitle}</span></div>` : ''}
          <h1 itemprop="headline" class="text-4xl md:text-5xl mb-6 leading-tight">${post.title}</h1>
          <div class="flex items-center gap-4 text-sm text-gray-400">
            <span>${formatDate(post.publishedAt)}</span>
            <span>${post.readTime || '3 min read'}</span>
            ${post.author?.name ? `<span>${post.author.name}</span>` : ''}
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          ${mainImageHTML}
          <div itemprop="articleBody" class="blog-post-content text-lg">
            ${bodyHTML}
          </div>
          <div class="mt-16 pt-8 border-t border-gray-200">
            <a href="/blog" class="inline-flex items-center gap-2 px-4 py-2 border border-teal-600 text-teal-600 rounded-md hover:bg-teal-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
              Back to all articles
            </a>
          </div>
        </div>
      </section>

      <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl mb-4 text-slate-900">${post.ctaText || 'Let TaxClaim handle this for you.'}</h2>
          <p class="text-lg text-gray-600 mb-8">Flat fee. Fully remote. 100% on-time.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact#contact-form" class="inline-flex items-center justify-center px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md">${post.ctaButtonLabel || 'Get Started'}</a>
            <a href="/services" class="inline-flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md hover:border-teal-600 hover:text-teal-600">View Our Services</a>
          </div>
        </div>
      </section>
    </article>
  </main>
</div>`

  // Replace SEO tags in the template
  let html = templateHTML
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${seoTitle}</title>`)
  html = html.replace(
    /<meta content="[^"]*" name="description">/,
    `<meta content="${seoDesc.replace(/"/g, '&quot;')}" name="description">`
  )
  html = html.replace(
    /<link href="https:\/\/taxclaim\.co\/" rel="canonical">/,
    `<link href="${canonical}" rel="canonical">`
  )
  // OG tags
  html = html.replace(
    /(<meta content=")[^"]*(?=" property="og:title">)/,
    `$1${seoTitle.replace(/"/g, '&quot;')}`
  )
  html = html.replace(
    /(<meta content=")[^"]*(?=" property="og:description">)/,
    `$1${seoDesc.replace(/"/g, '&quot;')}`
  )
  html = html.replace(
    /(<meta content=")[^"]*(?=" property="og:url">)/,
    `$1${canonical}`
  )
  html = html.replace(
    /(<meta content=")[^"]*(?=" property="og:image">)/,
    `$1${seoImage}`
  )
  html = html.replace(
    /(<meta content=")[^"]*(?=" name="twitter:title">)/,
    `$1${seoTitle.replace(/"/g, '&quot;')}`
  )
  html = html.replace(
    /(<meta content=")[^"]*(?=" name="twitter:description">)/,
    `$1${seoDesc.replace(/"/g, '&quot;')}`
  )
  html = html.replace(
    /(<meta content=")[^"]*(?=" name="twitter:image">)/,
    `$1${seoImage}`
  )
  // og:type should be article
  html = html.replace(
    /(<meta content=")website(?=" property="og:type">)/,
    '$1article'
  )

  // Inject article content into #root
  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root">${articleHTML}</div>`
  )

  return html
}

// --- Main ---
console.log('🔍 Fetching posts from Sanity...')
if (!process.env.SANITY_TOKEN) {
  console.warn('⚠️  SANITY_TOKEN not set — fetching as public (may return 0 posts if dataset is private)')
}
const posts = await client.fetch(POSTS_QUERY)
console.log(`📝 Found ${posts.length} posts`)

const templateHTML = readFileSync('./dist/index.html', 'utf-8')

let count = 0
for (const post of posts) {
  const slug = post.slug?.current
  if (!slug) continue

  const dir = join('./dist/blog', slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), buildPostHTML(post, templateHTML))
  console.log(`  ✅ /blog/${slug}`)
  count++
}

console.log(`\n🎉 Prerendered ${count} blog posts into dist/`)
