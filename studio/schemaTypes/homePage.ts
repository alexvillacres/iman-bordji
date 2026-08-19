import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      description:
        'Images render in order on the home page. The first image is the hero; the rest repeat through the portrait row layouts automatically.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt text',
              type: 'string',
              validation: (rule) => rule.warning('Alt text helps with accessibility and SEO.'),
            }),
          ],
        },
      ],
    }),
  ],
})
