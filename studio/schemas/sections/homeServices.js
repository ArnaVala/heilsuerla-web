export default {
  name: 'homeServices',
  type: 'object',
  title: 'Home - Þjónusta í boði',
  fields: [
    {
      name: 'sectionHeader',
      type: 'sectionHeader',
      title: 'Section header'
    },
    {
      name: 'heilsumark',
      type: 'alterImageTextBlock',
      title: 'Heilsumarkþjálfun'
    },
    {
      name: 'radgjof',
      type: 'alterImageTextBlock',
      title: 'Ráðgjöf, fyrirlestrar og vinnustofur'
    },
  ],
  preview: {
    select: {
      title: 'sectionHeader.eyebrow',
      subtitle: 'sectionHeader.heading',
      media: 'heilsumark.image'
    }
  }
}
