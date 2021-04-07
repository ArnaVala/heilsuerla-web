import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'
import {Container} from 'theme-ui'

import PageBuilder from '../components/organisms/pageBuilder'
import Contact from '../components/pageSections/contactSection'

export const query = graphql`
  query RadgjofPageQuery {
    radPage: sanityPage(slug: {current: {eq: "radgjof"}}) {
      id
      title
      slug {
        current
      }
      ...PageBuilder
    }
  }
`
const RadgjofPage = (props) => {
  const {data, errors} = props
  const radPage = data && data.radPage
  const {pageBuilder, _rawPageBuilder} = radPage

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={radPage.title} />
      <Container>
        <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
        <Contact />

      </Container>
    </Layout>
  )
}

export default RadgjofPage
