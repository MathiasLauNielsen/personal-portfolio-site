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
      { source: '/om-mig', destination: '/da/om-mig', permanent: false },
      { source: '/kontakt', destination: '/da/kontakt', permanent: false },
      { source: '/cases', destination: '/', permanent: false },
      { source: '/services', destination: '/', permanent: false },
      { source: '/en', destination: '/', permanent: false },
      { source: '/en/:path*', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
