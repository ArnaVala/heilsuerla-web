export default {
  name: 'sectionHeader',
  type: 'object',
  title: 'Section header',
  description: 'Optional fields',
  fields: [
    {
      title: 'Eyebrow',
      name: 'eyebrow',
      type: 'string',
      description: 'optional eyebrow'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'bodyPortableText',
      description: 'optional eyebrow'

    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'eyebrow'
    }
  }
}
