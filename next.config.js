/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'daisyui.com' },{hostname:'cdn1.vectorstock.com'}]
    }
}

module.exports = nextConfig
