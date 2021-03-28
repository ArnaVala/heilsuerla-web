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
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Linkur á ytri vef',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url'
              },
              {
                title: 'Opna í nýjum glugga',
                name: 'blank',
                description: 'Read https://css-tricks.com/use-target_blank/',
                type: 'boolean'
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Linkur innan vefs',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{type: 'post'}]
              }
            ]
          }
        ]
      }
    }
  ]
}
