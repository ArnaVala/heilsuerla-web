import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {Box, Flex, Text} from 'theme-ui'
import {Wrapper} from '../../common'
// number of posts in each category
function countPostsInCategory (posts) {
  const counts = posts
    .map((post) => post.categories)
    .flat()
    .reduce((acc, category) => {
      // check if existing category
      const existingCategory = acc[category.id]
      if (existingCategory) {
      // if, + 1
        existingCategory.count += 1
      } else {
      // otherwise new entry and set to 1
        acc[category.id] = {
          id: category.id,
          title: category.title,
          count: 1
        }
      }
      return acc
    }, {})
  const sortedCategories = Object.values(counts).sort((a, b) => b.count - a.count)
  return sortedCategories
}

export default function CategoryFilter ({activeCategory}) {
  const {categories, posts} = useStaticQuery(graphql`
  query {
    
    posts: allSanityPost {
      nodes {
        title
        featured
        categories {
          title
          id
        }
        slug {
          current
        }
      }
    }
    categories: allSanityCategory {
    nodes {
      title
      id
      slug {
        current
      }
    }
  }
  }
`)
  const categoriesWithCounts = countPostsInCategory(posts.nodes)

  return (
    <Box bg='white' py={2} px={2} variant='container.full' sx={{borderBottom: '2px solid', borderTop: '2px solid', borderColor: 'primary', position: ['block', 'fixed', null], top: [null, '100px', '105px']}} >
      <Wrapper as='div' variant='container.inner'>
        <Flex
          sx={{
            flexWrap: 'wrap',
            gap: 2,
            justifyContent: 'center',
            a: {
              color: 'primaryLight',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              mx: 1,
              borderBottom: '1px solid',
              borderColor: 'transparent',
              transition: 'all 0.3s ease-in-out',

              '&:hover': {
                color: 'primaryLight',
                borderBottom: '1px solid',
                borderColor: 'primaryLight',
                transition: 'all 0.3s ease-in-out'

              },
              '&[aria-current= "page"]': {
                color: 'primary',
                borderBottom: '1px solid',
                borderColor: 'primary',
                transition: 'all 0.3s ease-in-out'
              }
            }
          }}>
          <Link to='/blogg'><Text variant='caps' mb={0} sx={{fontSize: '14px'}}>
            Allir
          </Text>
          </Link>
          {
            categoriesWithCounts.map((category) => (
              <Link key={category.id} to={`/blogg/${category.title}`} sx={{}}>
                <Text variant='caps' mb={0} sx={{fontSize: '14px'}}>
                  {category.title}
                </Text>
              </Link>
            ))}
        </Flex>
      </Wrapper>
    </Box>
  )
}
