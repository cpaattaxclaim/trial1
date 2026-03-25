import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

console.log('POST:', post)
console.log('AUTHOR:', author)
console.log('CATEGORY:', category)

export default defineConfig({
  name: 'default',
  title: 'TaxClaim Blog',
  projectId: '95kssyaz',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
