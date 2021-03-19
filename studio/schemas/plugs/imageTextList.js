export default {
  name: 'imageTextList',
  type: 'object',
  title: 'Þjónusta í boði',
  fields: [
    {
      title: 'SubHeading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
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
