export default {
  name: 'alterImageListIconBlock',
  type: 'object',
  title: 'Section-Image and Bullet List',
  description: 'Options for textblock and CTA',
  fields: [
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string',
      description: 'Optional'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      description: 'Optional,For bigger text CTA'
    },
    {
      title: 'SubHeading',
      name: 'subheading',
      type: 'string',
      description: 'optional if using as head of paragraph'
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
      title: 'heading',
      media: 'image'
    }
  }
}
