export default {
  title: 'Recipe',
  name: 'recipe',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Hráefni',
      name: 'ingredients',
      type: 'array',
      of: [{type: 'ingredient'}]

    },
    {
      title: 'Aðferð',
      name: 'method',
      type: 'text'
    }

  ]
}
