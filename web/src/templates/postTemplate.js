import React from 'react'
import {graphql} from 'gatsby'
import {format, distanceInWords, differenceInDays} from 'date-fns'
import {toPlainText} from '../lib/helpers'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import Container from '../components/organisms/container'
import SinglePost from '../components/sections/Posts/singlePost'
import Layout from '../components/organisms/layout'
import SEO from '../components/atoms/seo'

export default function PostTemplate (props) {
  const {data, errors} = props
  const post = data && data.post

  return (
    <Layout>
      {
        errors && <SEO title='GraphQL Error' />
      }
      {
        post && (
          <SEO
            title={post.title || 'Untitled'}
            description={toPlainText(post._rawExcerpt)}
            image={post.image}
          />
        )
      }
      {
        errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )
      }
      {post && <SinglePost {...post} />}
    </Layout>
  )
};

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    post: 
      sanityPost(slug: {
        current: {
          eq: $slug
        }
      }) {
      title
        id
        slug {
          current
        }
        publishedAt
        categories {
          title
          id
          slug {
            current
          }
        }
        featured
        image {
          alt
          ...SanityImage
        }
        _rawExcerpt(resolveReferences: {maxDepth: 5})
        _rawBody(resolveReferences: {maxDepth: 5})
        authors {
          _key
          author {
            id
            name
            slug {
              current
            }
            image {
              ...SanityImage
              alt
            }
            _rawBio(resolveReferences: {maxDepth: 5})

        }
      }
    }
  }
`
