export default {
  name: 'hero',
  type: 'object',
  title: 'Hero',
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
      name: 'backgroundImage',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      }
    }

  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
