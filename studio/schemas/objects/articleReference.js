export default {
  name: 'articleReference',
  type: 'object',
  title: 'Article reference',
  fields: [
    {
      name: 'articleUrl',
      type: 'reference',
      to: [
        {
          type: 'post'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'post.title'
    }
  }
}
