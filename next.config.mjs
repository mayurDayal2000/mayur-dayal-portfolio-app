/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "amgwvlsojbtjdtkbxiyx.supabase.co",
        pathname: "/storage/v1/object/sign/images/*"
      }
    ]
  }
};

export default nextConfig;
