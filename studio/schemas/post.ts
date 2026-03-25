import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      title: 'Category',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
      title: 'Author',
    }),
  ],
})
