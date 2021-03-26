export default {
  name: 'pricingTab',
  type: 'object',
  title: 'Pricing',
  fields: [
    {
      name: 'tabTitle',
      title: 'Title for tab',
      type: 'string'
    },
    {
      name: 'heading',
      title: 'Heading for price block',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Short description for price block',
      type: 'text'
    },
    {
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [
        {type: 'price'}
      ]
    }

  ],
  preview: {
    select: {
      title: 'tabTitle',
      subtitle: 'description'
    }
  }
}
