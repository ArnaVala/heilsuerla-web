export default {
  name: 'heilsumarkContent',
  type: 'object',
  title: 'Heilsumarkþjálfun Content',
  fields: [
    {
      title: 'Main Heading',
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
      name: 'bigTextOne',
      type: 'string',
      title: 'Big Text with Border'
    },
    {
      name: 'listLeft',
      type: 'imageTextListWithIcon',
      title: 'Image with List Left'
    },
    {
      name: 'bigTextTwo',
      type: 'string',
      title: 'Big Text with Border'
    },
    {
      name: 'listRight',
      type: 'imageTextListWithIcon',
      title: 'Image with List Right'
    },
    {
      name: 'bigTextThree',
      type: 'string',
      title: 'Big Text with Border'
    },
    {
      name: 'illustration',
      type: 'mainImage',
      title: 'Illustration'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
