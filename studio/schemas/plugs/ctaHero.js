export default {
  name: 'ctaHero',
  type: 'object',
  title: 'Cta Hero',
  fields: [
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
    },
    {
      name: 'ctaLink',
      type: 'callToAction',
      title: 'CTA Link'
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
    {
      title: 'Image to left',
      name: 'blockImageDirectionLeft',
      type: 'boolean',
      description: 'Image to right if nothing chosen'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
