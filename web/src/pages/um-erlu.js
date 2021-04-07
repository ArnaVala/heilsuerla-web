import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'
import {Container, jsx, Flex, Text, Box, Grid
} from 'theme-ui'

import PageBuilder from '../components/organisms/pageBuilder'

export const query = graphql`
  query UmErluPageQuery {
    aboutPage: sanityPage(slug: {current: {eq: "um-erlu"}}) {
    id
    title
    slug {
      current
    }
    ... PageBuilder
  }
  }
 `
const UmErluPage = (props) => {
  const {data, errors} = props
  const aboutPage = data && data.aboutPage
  const {pageBuilder, _rawPageBuilder} = aboutPage

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={aboutPage.title} />
      <Container>
        <h1 hidden>Welcome to {aboutPage.title}</h1>
      </Container>

      <Container>
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
      </Container>
    </Layout>
  )
}

export default UmErluPage
