import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import post from './schemas/post'

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
    types: [post],
  },
})
