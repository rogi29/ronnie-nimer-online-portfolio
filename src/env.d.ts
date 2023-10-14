/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_PUBLIC_KEY?: string;
  readonly BUILDER_API_PUBLIC_KEY?: string;
  readonly DISABLE_PWA?: boolean;
}
