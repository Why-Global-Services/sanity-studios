import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'
import  myStructure  from './schemaTypes/plotSummaries'
import  myStructures  from './schemaTypes/plotSummary'

export default defineConfig({
  name: 'default',
  title: 'sanityStudiosWhy',

  projectId: 'thud3ijm',
  dataset: 'production',

  plugins: [
    structureTool({
      structure:myStructure
    }),
    visionTool(),
    
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
