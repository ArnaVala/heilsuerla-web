/** @jsx jsx */
import React from 'react'
import {jsx, Box} from 'theme-ui'

const IngredientList = ({ingredient = []}) => {
  return (
    <Box as='ul' sx={{listStyleType: 'none', textAlign: 'center', p: '0', py: '32px', fontFamily: 'heading'
    }}>
      {ingredient.map((ingredientItem) => {
        const {name, amount} = ingredientItem
        return (
          <Box as='li' sx={{textAlign: 'center'}} key={ingredientItem._key}>
            <Box sx={{textAlign: 'center'}}>{amount}
              {' '}
              {name}</Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default IngredientList
