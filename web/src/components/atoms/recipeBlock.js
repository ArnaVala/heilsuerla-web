/** @jsx jsx */
import React from 'react'
import IngredientList from './ingredientList'

import {jsx, Styled, Flex, Text, Box} from 'theme-ui'

function RecipeBlock ({node}) {
  return (
    <Flex bg='muted' variant='container.recipe'>
      <Text as='h4'>{node.title}</Text>
      <hr />
      <Text as='h5'>Hráefni</Text>
      <IngredientList ingredient={node.ingredients} />
      <Text as='h5'>Aðferð</Text>
      <Text as='p'>{node.method}</Text>
    </Flex>
  )
}

export default RecipeBlock
