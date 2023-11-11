/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "i0.wp.com",
        },
        {
          protocol: 'https',
          hostname: "www.vec.ca",
        },
        {
          protocol: 'https',
          hostname: "www.training.com.au",
        },
        {
          protocol: 'https',
          hostname: "www.dundryprimary.co.uk",
        },
        {
          protocol: 'https',
          hostname: "img.freepik.com",
        },
        {
          protocol: 'https',
          hostname: "miro.medium.com",
        },
        {
          protocol: 'https',
          hostname: "usa.bootcampcdn.com",
        },
        {
          protocol: 'https',
          hostname: "www.scalevp.com",
        },
        {
          protocol: 'https',
          hostname: "www.rwjbh.org",
        },
      ],
    },
    nextConfig
  }
  
