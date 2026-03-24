export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'International Tax & Compliance', value: 'International Tax & Compliance' },
          { title: 'Foreign-Owned US Entities', value: 'Foreign-Owned US Entities' },
          { title: 'FBAR & FATCA', value: 'FBAR & FATCA' },
          { title: 'Cross-Border Structures', value: 'Cross-Border Structures' },
          { title: 'Foreign Founder Essentials', value: 'Foreign Founder Essentials' },
          { title: 'US Business Tax', value: 'US Business Tax' },
          { title: 'US Individual Tax', value: 'US Individual Tax' },
          { title: 'Compliance & Filings', value: 'Compliance & Filings' },
          { title: 'Business Formation', value: 'Business Formation' },
          { title: 'Bookkeeping & Finance', value: 'Bookkeeping & Finance' },
        ],
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    // SEO Fields
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          description:
            'Overrides the post title in search results. Recommended: 50–60 characters.',
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description:
            'Summary shown in search results. Recommended: 150–160 characters.',
        },
        {
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description:
            'Image shown when shared on social media. Ideal size: 1200x630px.',
        },
      ],
    },
    // CTA Fields
    {
      name: 'ctaText',
      title: 'CTA Heading',
      type: 'string',
      description:
        'Custom heading shown at the bottom of this post. If left blank, a generic fallback is used.',
    },
    {
      name: 'ctaButtonLabel',
      title: 'CTA Button Label',
      type: 'string',
      description:
        'Button text shown with the CTA. If left blank, defaults to Get Started.',
    },
  ],
};
