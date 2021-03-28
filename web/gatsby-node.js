const {isFuture} = require('date-fns')
const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
            categories {
              title
              id
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/blogg/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/post-template.js'),
        context: {id}
      })
    })
}

async function createCategoryPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityCategory {
        nodes {
          title
          slug {
            current
          }
          id
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  const categoryNodes = (result.data.allSanityCategory || {}).nodes || []

  categoryNodes.forEach((node) => {
    const {title} = node
    const path = `/blogg/${title}`

    createPage({
      path,
      component: require.resolve('./src/pages/blogg.js'),
      context: {
        category: title
      }
    })
  })
}

exports.createPages = async ({graphql, actions}) => {
  await Promise.all([createBlogPostPages(graphql, actions), createCategoryPages(graphql, actions)])
}
