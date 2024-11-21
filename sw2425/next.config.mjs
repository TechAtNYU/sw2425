/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('next').NextConfig} */

const nextConfig = {

  output:'export',
  images: { unoptimized: true },
  typescript:{
      ignoreBuildErrors:true,
  }
};
