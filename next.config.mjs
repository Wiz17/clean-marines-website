/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'c4.wallpaperflare.com' },
      { protocol: 'https', hostname: 'c02.purpledshub.com' },
      { protocol: 'https', hostname: 'static.toiimg.com' },
      { protocol: 'https', hostname: 'cff2.earth.com' },
      { protocol: 'https', hostname: 'oceanservice.noaa.gov' },
      { protocol: 'https', hostname: 'www.oceanactionhub.org' },
      { protocol: 'https', hostname: 'greatbarrierreef.org' },
      { protocol: 'https', hostname: 'img.buzzfeed.com' },
      { protocol: 'https', hostname: 'assets.theoceancleanup.com' },
      { protocol: 'https', hostname: 'assets.newatlas.com' },
      { protocol: 'https', hostname: 'metro.co.uk' },
      { protocol: 'https', hostname: 'www.telegraph.co.uk' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },
      { protocol: 'https', hostname: 'decisionsystemsgroup.github.io' },
      { protocol: 'https', hostname: 'www.ilparksconference.com' },
      { protocol: 'https', hostname: 'ntrepidcorp.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
};

export default nextConfig;
