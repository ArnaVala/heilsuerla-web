import S from '@sanity/desk-tool/structure-builder'
import {MdSettings,
  MdPerson,
  MdDescription,
  MdLocalOffer
} from 'react-icons/md'

import IframePreview from '../previews/IframePreview'

// Web preview configuration
const remoteURL = 'https://heilsa.netlify.app'
const localURL = 'http://localhost:8000'
const previewURL =
  window.location.hostname === 'localhost' ? localURL : remoteURL

export const getDefaultDocumentNode = props => {
  /**
   * Here you can define fallback views for document types without
   * a structure definition for the document node. If you want different
   * fallbacks for different types, or document values (e.g. if there is a slug present)
   * you can set up that logic in here too.
   * https://www.sanity.io/docs/structure-builder-reference#getdefaultdocumentnode-97e44ce262c9
   */
  const {schemaType} = props
  if (schemaType == 'post') {
    return S.document().views([
      S.view.form(),
      S.view
        .component(IframePreview)
        .title('Web preview')
        .options({previewURL})
    ])
  }
  return S.document().views([S.view.form()])
}

/**
 * This defines how documents are grouped and listed out in the Studio.
 * Relevant documentation:
 * - https://www.sanity.io/guides/getting-started-with-structure-builder
 * - https://www.sanity.io/docs/structure-builder-introduction
 * - https://www.sanity.io/docs/structure-builder-typical-use-cases
 * - https://www.sanity.io/docs/structure-builder-reference
 */

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Pistlar')
        .icon(MdDescription)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Pistlar')),
      S.listItem()
        .title('Flokkar')
        .icon(MdLocalOffer)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Flokkar')),
      S.divider(),
      S.listItem()
        .title('Um Erlu')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Um Erlu')),
      S.listItem()
        .title('Ráðgjöf, fyrirlestrar og vinnustofur')
        .icon(MdPerson)
        .child(
          S.editor()
            .schemaType('radgjof')
            .documentId('radgjof')
            .title('Ráðgjöf, fyrirlestrar og vinnustofur')
        ),
      S.divider(),

      // `S.documentTypeListItems()` returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above.

      ...S.documentTypeListItems().filter(
        listItem =>
          !['category', 'radgjof', 'author', 'post', 'siteSettings'].includes(
            listItem.getId()
          )
      )
    ])
