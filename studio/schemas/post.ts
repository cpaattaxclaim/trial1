import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Category',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      title: 'Author',
    }),

    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3,
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    }),

    defineField({
      name: 'readTime',
      type: 'string',
      title: 'Read Time',
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }, { type: 'image' }],
    }),

    // 🔥 SEO FIELD (RESTORED)
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'SEO Title',
        }),
        defineField({
          name: 'description',
          type: 'text',
          title: 'Meta Description',
          rows: 3,
        }),
        defineField({
          name: 'ogImage',
          type: 'image',
          title: 'Social Image',
        }),
      ],
    }),

    // 🔥 CTA FIELDS (RESTORED)
    defineField({
      name: 'ctaText',
      type: 'string',
      title: 'CTA Heading',
    }),

    defineField({
      name: 'ctaButtonLabel',
      type: 'string',
      title: 'CTA Button Label',
    }),
  ],
})
