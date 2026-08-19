import {createClient} from '@sanity/client'
import {createImageUrlBuilder} from '@sanity/image-url'

export const client = createClient({
  projectId: '968ajt08',
  dataset: 'production',
  apiVersion: '2026-07-14',
  useCdn: false,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
