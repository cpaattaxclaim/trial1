import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// ✅ Import ALL schemas from index (IMPORTANT)
import { schemaTypes } from './schemas'

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
  types: [
    {
      name: 'testDoc',
      type: 'document',
      title: 'Test Doc',
      fields: [
        { name: 'title', type: 'string' }
      ]
    }
  ],
},
