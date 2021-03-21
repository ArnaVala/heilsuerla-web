export default {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
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
      name: 'testimonials',
      type: 'array',
      title: 'Testimonials',
      of: [
        {
          type: 'testimonial'
        }
      ]
    }
  ],

  preview: {
    select: {
      title: 'eyebrow',
      subtitle: 'heading'
    }
  }
}
