export default {
  name: 'heilsumarkIntro',
  type: 'object',
  title: 'Heilsumarkþjálfun Intro',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
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
      title: 'Þjónusta',
      name: 'serviceList',
      type: 'array',
      of: [
        {
          type: 'service'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
