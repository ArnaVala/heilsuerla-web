export default {
  name: 'pricing',
  type: 'object',
  title: 'pricing',
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
      name: 'prices',
      title: 'Price',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'included',
      title: 'Included',
      type: 'array',
      of: [
        {
          type: 'text'
        }
      ]
    }

  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
