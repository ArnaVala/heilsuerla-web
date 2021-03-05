export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Category Name',
      description: 'Name of category'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of category'
    }
  ],
  preview: {
    select: {
      name: 'title',
      description: 'description'
    },
    prepare: fields => ({
      title: `${fields.name} flokkur`
    })
  }
}
