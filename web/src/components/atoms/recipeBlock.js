/** @jsx jsx */
import React from 'react'
import IngredientList from './ingredientList'

import {jsx, Styled, Flex, Box} from 'theme-ui'

function RecipeBlock ({node}) {
  return (
    <Flex bg='muted' variant='container.flex' sx={{textAlign: 'center', m: '0 auto', px: ['32px', '64px'], py: '64px', my: '64px', mx: '16px'
    }}>
      <Box as='h4' sx={{mb: '32px'}}>{node.title}</Box>
      <div>
        <Box as='h5' sx={{color: 'primaryLight',
          margin: '0 auto',
          fontSize: '16px',
          textTransform: 'uppercase',
          fontWeight: '500',
          borderBottom: '2px solid',
          borderColor: 'primaryLight',
          width: '120px',
          pb: '8px',
          mt: '32px'}}>Hráefni</Box>
        <IngredientList ingredient={node.ingredients} />
        <Box
          as='h5'
          sx={{

            color: 'primaryLight',
            margin: '0 auto',
            fontSize: '16px',
            textTransform: 'uppercase',
            fontWeight: '500',
            borderBottom: '2px solid',
            borderColor: 'primaryLight',
            width: '120px',
            pb: '8px',
            mt: '32px'

          }}
        >
          Aðferð
        </Box>

        <Box as='p' sx={{pt: '32px', fontSize: '18px'}}>{node.method}</Box>
      </div>

    </Flex>
  )
}

export default RecipeBlock
