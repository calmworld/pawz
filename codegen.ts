import { CodegenConfig } from '@graphql-codegen/cli';

import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  // schema: process.env.VITE_API_ENDPOINT,
  schema: [
    {
      [process.env.VITE_API_ENDPOINT as string]: {
        headers: {
          'x-api-key': import.meta.env.VITE_PAWZ_API_KEY,
        },
      },
    },
  ],
  // schema: {
  //   [import.meta.env.VITE_API_ENDPOINT]: {
  //     headers: {
  //       'x-api-key': import.meta.env.VITE_PAWZ_API_KEY,

  //     },
  //   },
  // },
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;