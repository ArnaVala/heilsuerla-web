export default {
  name: 'price',
  type: 'object',
  title: 'Price',
  fields: [
    {
      name: 'plan',
      title: 'Plan',
      type: 'string'
    },
    {
      name: 'amount',
      type: 'string',
      title: 'Verð'
    },
    {
      name: 'payment',
      title: 'Month or OneGo',
      type: 'string'
    },
    {
      title: 'info',
      name: 'info',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'plan'
    }
  }
}
