export default {
  name: 'excerptPortableText',
  type: 'array',
  title: 'Úrdráttur, kynning',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [{title: 'Stór texti', value: 'bigBody'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Feitletrað', value: 'strong'},
          {title: 'Skáletrað', value: 'em'}
        ],
        annotations: []
      }
    }
  ]
}
