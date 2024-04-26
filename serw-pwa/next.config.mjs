/** @type {import('next').NextConfig} */

import withSerwistInit from '@serwist/next';

const isProd = process.env.NODE_ENV === 'production'   //this disables pwa support while in dev mode = see reason below


const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts', // output directory:  destination of the service workers. 
  swDest: 'public/sw.js', // where the service worker code will end up

});

export default withSerwist({
  // Next.js config options
});
