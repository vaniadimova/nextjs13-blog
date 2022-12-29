import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from "./structure";




const projectId: any = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset: any = process.env.NEXT_PUBLIC_SANITY_DATASET;


export default defineConfig({
  basePath: "/studio",
  name: 'VaniaD_Content_Studio',
  title: 'VaniaD Content Studio',
  projectId,
  dataset,
  plugins: [deskTool(
    { defaultDocumentNode: getDefaultDocumentNode }
  ), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme
})
