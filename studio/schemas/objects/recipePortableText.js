
export default {
  name: 'recipePortableText',
  type: 'array',
  title: 'Uppskrift',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {title: 'Aðferð', value: 'normal'}
      ],
      lists: [
        {title: 'Listi', value: 'bullet'}
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [
          {title: 'Feitletrað', value: 'strong'},
          {title: 'Skáletrað', value: 'em'}
        ]
      }
    }
  ]
}
