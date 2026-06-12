import { MetadataRoute } from 'next'
import { landingPages } from '@/lib/seoData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jobdork.tech'
  const currentDate = new Date()

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  // Add all landing pages
  Object.values(landingPages).forEach((page) => {
    routes.push({
      url: `${baseUrl}/${page.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  // Add all guide pages
  const guides = [
    'how-to-find-hidden-jobs',
    'ats-job-search-guide',
    'lever-job-search-guide',
    'greenhouse-job-search-guide',
    'hidden-tech-jobs-guide',
    'boolean-search-for-jobs'
  ]

  guides.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/guides/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  return routes
}
