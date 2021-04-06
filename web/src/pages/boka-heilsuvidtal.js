import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'
import {Container} from 'theme-ui'
import PageBuilder from '../components/organisms/pageBuilder'

import HeilsuContact from '../components/common/Forms/heilsuvidtalContact'

export const query = graphql`
  query HeilsuvidtalPageQuery {
    vidtalPage: sanityPage(slug: {current: {eq: "boka-heilsuvidtal"}}) {
      id
      title
      slug {
        current
      }
      ...PageBuilder
    }
  }
`

const HeilsuvidtalPage = (props) => {
  const {data, errors} = props
  const vidtalPage = data && data.vidtalPage
  const {pageBuilder, _rawPageBuilder} = vidtalPage

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO />
      <Container>
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
        <HeilsuContact />
      </Container>
    </Layout>
  )
}

export default HeilsuvidtalPage
