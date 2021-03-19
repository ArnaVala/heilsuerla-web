export default {
  name: 'testimonial',
  type: 'object',
  title: 'Testimonials',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Nafn þess sem getur umsögn'
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Quote'
    },
    {
      name: 'articleLink',
      type: 'articleReference',
      title: 'Link to post'
    }

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'quote'
    }
  }
}
