export default {
  name: 'alterImageTextBlock',
  type: 'object',
  title: 'Section-Image and TextBlock Alternate CTA',
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
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Optional'
    },
     {
      name: 'ctaLink',
      type: 'callToAction',
      title: 'CTA Link'
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
