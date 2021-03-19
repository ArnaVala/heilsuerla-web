export default {
  name: 'headingWithText',
  type: 'object',
  title: 'Heading with Text',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText'
    }
  ],
  preview: {
    select: {
      title: 'heading'
    }
  }
}
