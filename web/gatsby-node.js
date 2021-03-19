const {isFuture} = require('date-fns')
const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        nodes {
          title
          id
          publishedAt
            slug {
              current
            }
          }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postNodes = (result.data.allSanityPost || {}).nodes || []

  postNodes
    .filter((node) => !isFuture(node.publishedAt))
    .forEach((node, index) => {
      const {id, slug = {}} = node
      const path = `/blogg/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/postTemplate.js'),
        context: {
          slug: slug.current
        }
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
      component: require.resolve('./src/pages/pistlar.js'),
      context: {
        category: title
      }
    })
  })
}

/* async function createSanityPage (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPage(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `)
  if (result.errors) throw result.errors

  const pageEdges = (result.data.allSanityPage || {}).edges || []

  pageEdges
    .forEach((edge, index) => {
      const {id, slug = {}} = edge.node
      const path = `/${slug.current}/`
      console.log(path)

      createPage({
        path,
        component: require.resolve('./src/templates/page.js'),
        context: {id}
      })
    })
} */

exports.createPages = async ({graphql, actions}) => {
  await Promise.all([
    createBlogPostPages(graphql, actions),
    createCategoryPages(graphql, actions)
  ])
}
