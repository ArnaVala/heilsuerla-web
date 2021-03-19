export default {
  name: 'price',
  type: 'object',
  title: 'Price',
  fields: [
    {
      name: 'amount',
      type: 'string',
      title: 'Verð'
    },
    {
      title: 'Month or OneGo',
      name: 'payment',
      type: 'text'
    },
    {
      title: 'info',
      name: 'info',
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
