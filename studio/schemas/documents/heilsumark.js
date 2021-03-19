export default {
  name: 'radgjof',
  type: 'document',
  title: 'Ráðgjöf',
  __experimental_actions: [/* 'create', */ 'update', /* 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Title for menu'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200
      }
    },
    {
      name: 'eyebrow',
      type: 'string',
      title: 'Caption eyebrow',
      description: 'Setja yfirtitil hér'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Titil texti hér'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Setja aðalútskýringu hér.'
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
      name: 'serviceSection',
      type: 'serviceBlock',
      title: 'Þjónusta í boði'
    }
  ]
}
