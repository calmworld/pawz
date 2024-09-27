import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [import.meta.env.VITE_API_ENDPOINT],
  // schema: [
  //   {
  //     [import.meta.env.VITE_API_ENDPOINT]: {
  //       headers: {
  //         // authorization: `Bearer ${import.meta.env.VITE_PAWZ_API_KEY}`,
  //         region: 'us-east-1',
  //         defaultAuthMode: 'apiKey',
  //         apiKey: import.meta.env.VITE_PAWZ_API_KEY,
  //       },
  //     }
  //   }
  // ],
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