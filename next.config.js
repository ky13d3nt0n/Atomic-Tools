/**
 * @module NextJS Config
 * @description Our config for NextJSx
 */
const withPlugins = require( 'next-compose-plugins' );
const withTM = require( 'next-transpile-modules' )( [ 'lodash-es' ] );

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  trailingSlash: false,
  productionBrowserSourceMaps: true,
  env: {},
  compiler: {
    removeConsole: {
      exclude: ( process.env.environment === 'production' ? [ 'error' ] : [ 'log', 'error', 'warn', 'info', 'table', 'groupCollapsed', 'groupEnd' ] )
    }
  },
  experimental: {
    optimizeCss: true
  }
};

module.exports = withPlugins( [ withTM ], nextConfig );
