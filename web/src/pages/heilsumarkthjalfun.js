import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'
import {Container} from 'theme-ui'

import PageBuilder from '../components/organisms/pageBuilder'

export const query = graphql`
  query HeilsumarkthjalfunPageQuery {
    heilsumarkPage: sanityPage(slug: {current: {eq: "heilsumarkthjalfun"}}) {
      id
      title
      slug {
        current
      }
      ...PageBuilder
    }
  }
`
const HeilsumarkthjalfunPage = (props) => {
  const {data, errors} = props
  const heilsumarkPage = data && data.heilsumarkPage
  const {pageBuilder, _rawPageBuilder} = heilsumarkPage

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
      </Container>
    </Layout>
  )
}

export default HeilsumarkthjalfunPage
