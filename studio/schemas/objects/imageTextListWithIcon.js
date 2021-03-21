export default {
  name: 'imageTextListWithIcon',
  type: 'object',
  title: 'List with Image and Header',
  fields: [
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      }
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
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}
