export default {
  name: 'ctaSimple',
  type: 'object',
  title: 'Simple CTA',
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
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
