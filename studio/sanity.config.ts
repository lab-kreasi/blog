import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Blog Lab Kreasi',

  projectId: '5m3eg18d',
  dataset: 'production',
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
