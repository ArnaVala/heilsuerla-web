export default {
  name: 'textIconList',
  type: 'object',
  title: 'Text with Icon',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
