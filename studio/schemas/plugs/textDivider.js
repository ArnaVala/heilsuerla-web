export default {
  name: 'textDivider',
  type: 'object',
  title: 'Divider with Text',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'text'
    },
    {
      name: 'backgroundImage',
      type: 'mainImage',
      title: 'Background Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage'
    }
  }
}
