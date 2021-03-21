export default {
  name: 'ctaSimple',
  type: 'object',
  title: 'Simple CTA with List',
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
      name: 'backgroundImage',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
