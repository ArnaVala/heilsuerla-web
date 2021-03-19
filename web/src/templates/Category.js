import React from 'react'
import {graphql, Link} from 'gatsby'
import Container from '../components/organisms/container'
import SEO from '../components/atoms/seo'
import GraphQLErrorList from '../components/atoms/graphql-error-list'
import Layout from '../components/organisms/layout'
// Import a function to build the blog URL
import {getBlogUrl} from '../lib/helpers'

const CategoryPostTemplate = (props) => {
  const {data = {}, errors} = props
  // Destructure the new posts property from props
  const {title, description, posts} = data.category || {}

  return (
    <Layout>
      <Container>
        {errors && <GraphQLErrorList errors={errors} />}
        {!data.category && <p>No category data</p>}
        <SEO title={title} description={description} />
        <article>
          <h1>Category: {title}</h1>
          <p>{description}</p>
          {/*
            If there are any posts, add the heading,
            with the list of links to the posts
          */}
          {posts && (
            <>
              <h2>Posts</h2>
              <ul>
                {posts.map((post) => (
                  <li key={post._id}>
                    <Link to={getBlogUrl(post.publishedAt, post.slug)}>{post.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </article>
      </Container>
    </Layout>
  )
}

export default CategoryPostTemplate
