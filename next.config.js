const isDev = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  basePath: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: isDev ? "" : process.env.NEXT_PUBLIC_BASE_PATH,
};
