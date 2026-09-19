/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Old URLs from before English became the default language.
    return [
      { source: '/om-mig', destination: '/da/om-mig', permanent: true },
      { source: '/kontakt', destination: '/da/kontakt', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
    ]
  },
}

export default nextConfig
