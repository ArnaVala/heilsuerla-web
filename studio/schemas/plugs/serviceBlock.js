export default {
  name: 'serviceBlock',
  type: 'object',
  title: 'Þjónusta í boði',
  fields: [
    {
      title: 'SubHeading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
    },
    {
      title: 'Þjónusta',
      name: 'serviceList',
      type: 'array',
      of: [
        {
          type: 'service'
        }
      ]
    }

  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
