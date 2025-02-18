import { withContentlayer } from 'next-contentlayer2';

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        removeConsole: true
    }
};

export default withContentlayer(nextConfig);
