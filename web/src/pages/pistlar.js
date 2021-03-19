import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/atoms/graphql-error-list'

import SEO from '../components/atoms/seo'
import Layout from '../components/organisms/layout'

import PostList from '../components/sections/Posts/postList'
import CategoryFilter from '../components/sections/Posts/CategoryFilter'

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
      <SEO title='blogg' />
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
        id
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
