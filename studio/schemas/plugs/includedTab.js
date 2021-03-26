export default {
  name: 'includedTab',
  type: 'object',
  title: 'Included Tab',
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
      name: 'includedList',
      title: 'Included in service',
      type: 'array',
      of: [
        {type: 'textIconList'}
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
