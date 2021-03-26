export default {
  name: 'heilsumarkInfo',
  type: 'object',
  title: 'Heilsumarkþjálfun Info',
  fields: [
    {
      title: 'Heading',
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
      name: 'includedTab',
      type: 'includedTab',
      title: 'Innifalið'
    },
    {
      name: 'pricingTab',
      type: 'pricingTab',
      title: 'Verð'
    },
    {
      name: 'stepsTab',
      type: 'stepsTab',
      title: 'Fyrirkomulag'
    }

  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
