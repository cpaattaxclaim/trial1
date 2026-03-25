export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'image', title: 'Image', type: 'image' },
  ],
}
