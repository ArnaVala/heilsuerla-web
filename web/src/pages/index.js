
/** @jsx jsx */
import {graphql} from 'gatsby'
import {
  mapEdgesToNodes,
  filterOutDocsWithoutSlugs,
  filterOutDocsPublishedInTheFuture
} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import SEO from '../components/atoms/seo'

import {jsx, Container} from 'theme-ui'
import Layout from '../components/organisms/layout'
import PageBuilder from '../components/organisms/pageBuilder'

export const query = graphql`
  query IndexPageQuery {
    site: 
    sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    },
    indexPage: sanityPage(id: {eq: "20cdae87-1eeb-5515-a9e5-e28f9e4f8af7"}) {
      id
      title
      slug {
        current
      }
      ... PageBuilder
    },
   
    posts: allSanityPost(
      limit: 3
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          image {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const IndexPage = (props) => {
  const {data, errors} = props
  const indexPage = data && data.indexPage
  const {pageBuilder, _rawPageBuilder} = indexPage

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const site = (data || {}).site

  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
      .filter(filterOutDocsWithoutSlugs)
      .filter(filterOutDocsPublishedInTheFuture)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
      </Container>
      <PageBuilder pageBuilder={pageBuilder} _rawPageBuilder={_rawPageBuilder} />
      <Container>
        {
          postNodes && (
            <BlogPostPreviewList title='Nýjast á blogginu' nodes={postNodes} browseMoreHref='/pistlar/' />
          )
        }
      </Container>
    </Layout>
  )
}

export default IndexPage
