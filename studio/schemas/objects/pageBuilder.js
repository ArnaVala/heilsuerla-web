export default {
  name: 'pageBuilder',
  type: 'array',
  title: 'Page Builder',
  of: [
    // Home page
    {
      type: 'hero',
      title: 'Home - Hero Section header'
    },
    {
      type: 'homeServices',
      title: 'Home - Service Section CTA'
    },
    {
      type: 'ctaHeilsuvidtal',
      title: 'Call to Action Heilsuviðtal'
    },
    {
      type: 'testimonials',
      title: 'Testimonials'
    },

    // About page
    {
      type: 'aboutIntro',
      title: 'About Intro'
    },
    {
      type: 'aboutStory',
      title: 'About Story'
    },

    // Heilsumark page
    {
      type: 'heilsumarkIntro',
      title: 'Heilsumark Intro'
    },
    {
      type: 'heilsumarkContent',
      title: 'Heilsumark Content'
    },
    {
      type: 'heilsumarkInfo',
      title: 'Heilsumark Info'
    },

    // Radgjof page

    // Shared sections
    {
      type: 'ctaSimple',
      title: 'ctaSimple'
    },
    {
      type: 'divider',
      title: 'Divider'
    },
    {
      type: 'quoteBanner',
      title: 'Quote Banner'
    },
    {
      type: 'textDivider',
      title: 'Divider with Text'
    },
    {
      type: 'textHeader',
      title: 'Page header text'
    },
    {
      type: 'textImageBlock',
      title: 'Text Heading Image'
    }

  ]
}
