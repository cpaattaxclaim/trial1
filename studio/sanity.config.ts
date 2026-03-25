import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import post from './schemas/post'
import author from './schemas/author'
import category from './schemas/category'

export default defineConfig({
  name: 'default',
  title: 'TaxClaim Blog',
  projectId: '95kssyaz',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: [post, author, category],
  },
})
