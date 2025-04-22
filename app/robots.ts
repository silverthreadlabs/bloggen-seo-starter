import { baseUrl } from 'app/sitemap'

//remember the robots is being controlled in the seo/metadata/createBaseMedata.ts
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
