import React from 'react'

const hightlightIcon = () => <span style={{fontWeight: 'bold'}}>!!!</span>
const highlightRender = props => <span style={{backgroundColor: 'yellow'}}>{props.children}</span>

export default {
  name: 'bodyPortableText',
  type: 'array',
  title: 'Pistill efni',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {title: 'Texti', value: 'normal'},
        {title: 'Stór titill', value: 'h2'},
        {title: 'Titill', value: 'h3'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'bullet', value: 'bullet'},
        {title: 'Number', value: 'number'}
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [
          {title: 'Feitletrað', value: 'strong'},
          {title: 'Skáletrað', value: 'em'},
          {
            title: 'Highlight',
            value: 'highlight',
            blockEditor: {
              icon: hightlightIcon,
              render: highlightRender
            }
          }
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
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
      },
      of: [{type: 'authorReference'}]
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    {
      type: 'mainImage',
      options: {hotspot: true}
    },
    {
      type: 'recipe'
    }
  ]
}
