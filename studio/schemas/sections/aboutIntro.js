export default {
  name: 'aboutIntro',
  type: 'object',
  title: 'About Intro',
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
      name: 'ctaLink',
      type: 'callToAction',
      title: 'CTA Link'
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'BackgroundColor',
      options: {
        list: [
          {title: 'MutedOat', value: 'muted'},
          {title: 'White', value: 'white'},
          {title: 'PrimaryMuted', value: 'primaryMuted'},
          {title: 'AccentMuted', value: 'accentMuted'},
          {title: 'Primary Light', value: 'primaryLight'}
        ],
        layout: 'dropdown' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'image',
      type: 'mainImage',
      title: 'Image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image'
    }
  }
}
