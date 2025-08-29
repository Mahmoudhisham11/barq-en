/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['ar', 'en'],   // اللغات المدعومة
    defaultLocale: 'en',     // الإنجليزية افتراضي
  },
}

module.exports = nextConfig
