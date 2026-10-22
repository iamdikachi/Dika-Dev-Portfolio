import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dikachi-portfolio.vercel.app'
  return [
    {
      url: baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add other routes here if you have more pages
    // {
    //   url: `${baseUrl}/projects`,
    //
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
  ]
}
