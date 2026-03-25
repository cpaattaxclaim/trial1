// schemas/post.ts
export default {
  name: 'post',
  title: 'Post',
  type: 'document',

  groups: [
    { name: 'content', title: '📄 Content', default: true },
    { name: 'seo', title: '🔍 SEO' },
    { name: 'social', title: '📱 Social / Reels' },
    { name: 'cta', title: '🎯 CTA' },
  ],

  fields: [
    // ─── CONTENT ─────────────────────────────────────────────
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      group: 'content',
      to: [{ type: 'author' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'content',
      to: [{ type: 'category' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      group: 'content',
      description: 'e.g. "5 min read"',
    },
    {
      name: 'featured',
      title: 'Featured Post?',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
        },
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        },
        {
          name: 'callout',
          title: 'Callout Box',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: '💡 Tip', value: 'tip' },
                  { title: '⚠️ Warning', value: 'warning' },
                  { title: 'ℹ️ Info', value: 'info' },
                  { title: '📅 Deadline', value: 'deadline' },
                ],
                layout: 'radio',
              },
            },
            { name: 'text', title: 'Text', type: 'text' },
          ],
          preview: {
            select: { type: 'type', text: 'text' },
            prepare({ type, text }: any) {
              const icons: Record<string, string> = {
                tip: '💡', warning: '⚠️', info: 'ℹ️', deadline: '📅',
              }
              return { title: `${icons[type] ?? '📌'} ${type ?? 'Callout'}`, subtitle: text }
            },
          },
        },
      ],
    },
    {
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      group: 'content',
      of: [{ type: 'reference', to: [{ type: 'post' }] }],
      description: 'Boosts internal linking and SEO. Max 4.',
      validation: (Rule: any) => Rule.max(4),
    },

    // ─── SEO ──────────────────────────────────────────────────
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          description: 'Overrides the post title in search results. Recommended: 50–60 characters.',
          validation: (Rule: any) => Rule.max(60),
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Summary shown in search results. Recommended: 150–160 characters.',
          validation: (Rule: any) => Rule.max(160),
        },
        {
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description: 'Image shown when shared on social media. Ideal size: 1200×630px.',
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Only set if this post is republished elsewhere.',
        },
        {
          name: 'noIndex',
          title: 'Hide from Google (noindex)',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },

    // ─── SOCIAL / REELS ───────────────────────────────────────
    {
      name: 'hook',
      title: 'Hook (First 3 Seconds)',
      type: 'string',
      group: 'social',
      description: 'Opening line for your Reel / Short. Make it punchy.',
      validation: (Rule: any) => Rule.max(120),
    },
    {
      name: 'keyPoints',
      title: 'Key Points (Script Bullets)',
      type: 'array',
      group: 'social',
      of: [{ type: 'string' }],
      description: 'Bullet points to build your Reel script from.',
    },
    {
      name: 'caption',
      title: 'Social Caption',
      type: 'text',
      rows: 4,
      group: 'social',
      description: 'Ready-to-post caption for Instagram / LinkedIn / X.',
    },
    {
      name: 'contentStatus',
      title: 'Content Status',
      type: 'string',
      group: 'social',
      options: {
        list: [
          { title: '📝 Draft', value: 'draft' },
          { title: '🎬 Reel Pending', value: 'reel_pending' },
          { title: '✅ Published', value: 'published' },
          { title: '♻️ Repurposed', value: 'repurposed' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
    },

    // ─── CTA ──────────────────────────────────────────────────
    {
      name: 'ctaText',
      title: 'CTA Heading',
      type: 'string',
      group: 'cta',
      description: 'Custom heading shown at the bottom of this post. If left blank, a generic fallback is used.',
    },
    {
      name: 'ctaButtonLabel',
      title: 'CTA Button Label',
      type: 'string',
      group: 'cta',
      description: 'Button text shown with the CTA. If left blank, defaults to "Get Started".',
    },
    {
      name: 'ctaButtonUrl',
      title: 'CTA Button URL',
      type: 'url',
      group: 'cta',
      description: 'Where the CTA button links to. Defaults to your homepage if blank.',
    },
    {
      name: 'leadMagnet',
      title: 'Inline Lead Magnet',
      type: 'object',
      group: 'cta',
      description: 'Optional mid-post CTA block to capture leads.',
      fields: [
        { name: 'headline', type: 'string', title: 'Headline' },
        { name: 'subtext', type: 'string', title: 'Subtext' },
        { name: 'buttonText', type: 'string', title: 'Button Text' },
        { name: 'buttonUrl', type: 'url', title: 'Button URL' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category.title',
      media: 'mainImage',
      status: 'contentStatus',
    },
    prepare({ title, author, category, media, status }: any) {
      const statusEmoji: Record<string, string> = {
        draft: '📝',
        reel_pending: '🎬',
        published: '✅',
        repurposed: '♻️',
      }
      return {
        title,
        subtitle: `${statusEmoji[status] ?? '📝'} ${category ?? 'No category'} · ${author ?? 'No author'}`,
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Content Status',
      name: 'contentStatusAsc',
      by: [{ field: 'contentStatus', direction: 'asc' }],
    },
  ],
}
