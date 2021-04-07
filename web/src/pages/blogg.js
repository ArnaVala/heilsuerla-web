import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/atoms/graphql-error-list'

import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'

import PostList from '../components/pageSections/Posts/postList'
import CategoryFilter from '../components/pageSections/Posts/CategoryFilter'

export default function PistlarPage ({data, errors, pageContext}) {
  const posts = data.posts.nodes

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title='Blogg' />
      <h1 hidden>Velkomin á HeilsuErlu bloggið</h1>

      <CategoryFilter activeCategory={pageContext.category} />
      {posts && (
        <PostList posts={posts} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query PistlarPageQuery ($category: [String])
 {
    posts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {
          elemMatch: {
            title: {
              in: $category
            }
          }
        }
      }
    ) {
      nodes {
        title
        _rawExcerpt
        slug {
          current
        }
        id
        publishedAt
        slug {
          current
        }
        image {
            ...SanityImage
            alt
          }
        categories {
          id
          title
          slug {
            current
          }
        }
        authors {
          author {
            id
            name
            slug {
              current
            }
          }
        }
      }
    }
    relatedPosts: allSanityPost(
      sort: {fields: [publishedAt], order: DESC}
      filter: {
        categories: {
          elemMatch: {
            title: {
              in: $category
            }
          }
        }
      }
    ) {
      nodes {
        title
        _rawExcerpt
        slug {
          current
        }
        id
        publishedAt
        slug {
          current
        }
        image {
            ...SanityImage
            alt
          }
        categories {
          id
          title
          slug {
            current
          }
        }
        authors {
          author {
            id
            name
            slug {
              current
            }
          }
        }
      }
    }
  }
`
