export default {
  name: 'textHeader',
  type: 'object',
  title: 'Eyebrow Heading Text block',
  description: 'Header with no image',
  fields: [
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
    },
    {
      name: 'backgroundImage',
      type: 'mainImage',
      title: 'Background Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow'
    }
  }
}
