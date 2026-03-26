import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'role',
      type: 'string',
      title: 'Role / Title',
      description: 'e.g. CPA, Tax Advisor, Founder',
    }),

    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
      rows: 4,
    }),

    defineField({
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn URL',
    }),

    defineField({
      name: 'twitter',
      type: 'url',
      title: 'Twitter / X URL',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
