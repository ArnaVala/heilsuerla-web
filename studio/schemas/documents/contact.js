export default {
  name: 'contact',
  title: 'Contact submissions',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Fullt nafn',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Netfang',
      type: 'string'
    },
    {
      name: 'topic',
      title: 'Efni',
      type: 'string'
    },
    {
      name: 'message',
      title: 'Skilaboð',
      type: 'text'
    }
  ]
}
