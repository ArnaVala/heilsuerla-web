export default {
  name: 'ctaHeilsuvidtal',
  type: 'object',
  title: 'ctaHeilsuvidtal',
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
      title: 'text',
      name: 'text',
      type: 'text'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
    },
    {
      title: 'List with Icon',
      name: 'listWithIcon',
      type: 'array',
      of: [
        {
          type: 'text'
        }
      ]
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
