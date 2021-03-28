/** @jsx jsx */
import React from 'react'
import {jsx, Box} from 'theme-ui'

const IngredientList = ({ingredient = []}) => {
  return (
    <Box as='ul'>
      {ingredient.map((ingredientItem) => {
        const {name} = ingredientItem
        return (
          <Box as='li' sx={{textAlign: 'center'}} key={ingredientItem._key}>
            <Box sx={{textAlign: 'center'}}>{name}</Box>
          </Box>
        )
      })}
    </Box>
  )
}

export default IngredientList
