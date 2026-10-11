/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // URLs from earlier versions of the site.
    return [
      // One address: www forwards to the bare domain.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.mlnanalytics.com' }],
        destination: 'https://mlnanalytics.com/:path*',
        permanent: true,
      },
      { source: '/om-mig', destination: '/da/om-mig', permanent: true },
      { source: '/kontakt', destination: '/da/kontakt', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/', permanent: true },
      // A short post on exploration, merged into the long one on 2026-10-11.
      { source: '/blog/you-only-learn-from-the-choices-you-make', destination: '/blog/what-it-costs-to-find-out', permanent: true },
    ]
  },
}

export default nextConfig
