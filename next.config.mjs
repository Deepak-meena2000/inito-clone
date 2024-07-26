/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images : {
    remotePatterns : [
        {
            hostname : 'cdn.inito.com',
            protocol : 'https'
        }
    ]
  }
};

export default nextConfig;
