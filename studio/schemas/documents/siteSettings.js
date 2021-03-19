export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'url',
      type: 'url',
      title: 'Site URL'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string'
    },

    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    }
  ]
}
