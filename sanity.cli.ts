import {defineCliConfig} from 'sanity/cli'

const projectId: any = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset: any = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
