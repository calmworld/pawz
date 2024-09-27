/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
    readonly VITE_API_ENDPOINT: string
    readonly VITE_PAWZ_API_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }