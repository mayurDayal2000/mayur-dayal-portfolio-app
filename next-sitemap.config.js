/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mayurdayal-portfolio.vercel.app/",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://mayurdayal-portfolio.vercel.app/sitemap.xml",
    ],
  },
  exclude: [],
  generateIndexSitemap: true,
  transform: async (_, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};
