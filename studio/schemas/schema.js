// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import * as documents from './documents'
import * as objects from './objects'
import * as plugs from './plugs'
import * as sections from './sections'

const allDocuments = Object.values(documents).map(document => {
  return {...document, fields: document.fields}
})

const allObjects = Object.values(objects).map(object => {
  return {...object, fields: object.fields}
})
const allPlugs = Object.values(plugs).map(plug => {
  return {...plug, fields: plug.fields}
})
const allSections = Object.values(sections).map(section => {
  return { ...section, fields: section.fields }
})


export default createSchema({
  // We name our schema
  name: 'blog',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat(allObjects)
    .concat(allDocuments)
    .concat(allPlugs)
    .concat(allSections)
})
