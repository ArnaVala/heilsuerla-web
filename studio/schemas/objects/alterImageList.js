export default {
  name: 'alterImageList',
  type: 'object',
  title: 'Image and list Alternate',
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
    },
    {
      title: 'Image to left',
      name: 'blockImageDirectionLeft',
      type: 'boolean',
      description: 'Image to right if nothing chosen'
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
