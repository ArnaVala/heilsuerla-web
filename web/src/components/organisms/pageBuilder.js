import React from 'react'
import AboutIntro from '../pageSections/aboutIntro'
import AboutStory from '../pageSections/aboutStory'
import Hero from '../pageSections/hero'
import TextImageBlock from '../pageSections/textImageBlock'
import PageHeader from '../pageSections/pageHeader'
import ImageTextList from '../pageSections/imageTextList'
import Testimonials from '../pageSections/testimonials'
import HeilsumarkIntro from '../pageSections/heilsumarkIntro'
import HeilsumarkContent from '../pageSections/heilsumarkContent'
import QuoteBanner from '../pageSections/quoteBanner'
import HomeServices from '../pageSections/homeServices'
import CtaHeilsuvidtal from '../pageSections/ctaHeilsuvidtal'
import HeilsumarkInfo from '../pageSections/heilsumarkInfo'
import Divider from '../pageSections/divider'

function PageBuilder (props) {
  const {type, pageBuilder, _rawPageBuilder} = props
  // Load the right component, based on the _type from Sanity
  const Components = {
    // ** homePage **//
    hero: Hero,
    homeServices: HomeServices,
    ctaHeilsuvidtal: CtaHeilsuvidtal,
    testimonials: Testimonials,

    // ** aboutPage **//
    aboutIntro: AboutIntro,
    aboutStory: AboutStory,

    // ** heislumark **//
    heilsumarkIntro: HeilsumarkIntro,
    heilsumarkContent: HeilsumarkContent,
    heilsumarkInfo: HeilsumarkInfo,
    // pricing: HeilsumarkPricing

    // ** radgjofPage **//
    // shared-pageHeader
    // radgjofServices (image with list)

    // common
    textImageBlock: TextImageBlock,
    imageTextList: ImageTextList,

    // ** shared **/
    quoteBanner: QuoteBanner,
    textHeader: PageHeader,
    divider: Divider

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
