export default {
  name: 'quoteBanner',
  type: 'object',
  title: 'Quote Banner with BG',
  fields: [
    {
      title: 'Quote',
      name: 'quote',
      type: 'string'
    },
    {
      title: 'Quoted',
      name: 'quoted',
      type: 'string'
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
      title: 'quote',
      subtitle: 'quoted',
      media: 'backgroundImage'
    }
  }
}
