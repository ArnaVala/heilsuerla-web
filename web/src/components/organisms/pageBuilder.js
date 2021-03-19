import React from 'react'

import AboutIntro from '../pageSections/aboutIntro'
import AboutStory from '../pageSections/aboutStory'
import Hero from '../pageSections/hero'
import TextImageBlock from '../pageSections/textImageBlock'
import TextHeader from '../pageSections/textHeader'
import ImageTextList from '../pageSections/imageTextList'
import Testimonials from '../pageSections/testimonials'
import HeilsumarkIntro from '../pageSections/heilsumarkIntro'
import HeilsumarkContent from '../pageSections/heilsumarkContent'
import QuoteBanner from '../pageSections/quoteBanner'

function PageBuilder (props) {
  const {type, pageBuilder, _rawPageBuilder} = props
  // Load the right component, based on the _type from Sanity
  const Components = {
    // homePage
    hero: Hero,
    // about
    aboutIntro: AboutIntro,
    aboutStory: AboutStory,
    // heislumark
    heilsumarkIntro: HeilsumarkIntro,
    heilsumarkContent: HeilsumarkContent,
    // common
    textImageBlock: TextImageBlock,
    textHeader: TextHeader,
    imageTextList: ImageTextList,
    testimonials: Testimonials,
    quoteBanner: QuoteBanner

  }
  // 'raw' content needs to be passed in for the PortableText Component
  return pageBuilder.map((block, index) => {
    if (Components[block._type]) {
      return React.createElement(Components[block._type], {
        key: block._key,
        block: block,
        type,
        raw: _rawPageBuilder[index]
      })
    }
  })
}
export default PageBuilder
