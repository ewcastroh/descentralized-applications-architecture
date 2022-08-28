/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STAGING_ALCHEMY_KEY:
      "https://eth-rinkeby.alchemyapi.io/v2/He693GEWr77YjtWHD9xUYTl1vJwIwVZH",
  },
};

module.exports = nextConfig;