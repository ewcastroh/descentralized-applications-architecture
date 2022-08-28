require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STAGING_ALCHEMY_KEY: process.env.STAGING_ALCHEMY_KEY,
  },
};

module.exports = nextConfig;