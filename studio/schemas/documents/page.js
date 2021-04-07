export default {
  type: 'document',
  name: 'page',
  title: 'Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'SEO Description'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'title',
        maxLength: 96
      }
    },

    {
      name: 'pageBuilder',
      type: 'pageBuilder',
      title: 'Content',
      description: 'Veldu síðuhluta'
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug'
    },
    prepare ({title = 'No title', slug = {}}) {
      return {
        title,
        subtitle: slug.current
      }
    }
  }
}
