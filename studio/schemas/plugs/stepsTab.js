export default {
  name: 'stepsTab',
  type: 'object',
  title: 'Steps to register',
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
      name: 'stepsList',
      title: 'Steps to register',
      type: 'array',
      of: [
        {
          type: 'textIconList'

        }
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
