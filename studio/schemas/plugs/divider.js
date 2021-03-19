export default {
  name: 'divider',
  type: 'object',
  title: 'Graphic Divider',
  fields: [
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
