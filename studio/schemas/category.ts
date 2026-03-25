// schemas/category.ts
export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  icon: () => '🗂️',
  fields: [
    {
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description (SEO + Category Page)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Overrides title in <meta> if set',
    },
    {
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
}
