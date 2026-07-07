/** @type {import('next').NextConfig} */
const nextConfig = {
  // The <link> to Google Fonts loads client-side; skip build-time inlining,
  // which would otherwise require network access during the build.
  optimizeFonts: false,
};
export default nextConfig;
