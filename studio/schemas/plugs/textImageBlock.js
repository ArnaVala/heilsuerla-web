export default {
  name: 'textImageBlock',
  type: 'object',
  title: 'Text with Image',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      title: 'Text Block',
      name: 'text',
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
      title: 'Image to left',
      name: 'blockImageDirectionLeft',
      type: 'boolean',
      description: 'Image to right if nothing chosen'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
