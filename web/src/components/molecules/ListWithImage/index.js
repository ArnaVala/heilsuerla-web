
/** @jsx jsx */
import IngredientList from '../../atoms/ingredientList'

import {jsx, Flex} from 'theme-ui'

function ListWithImage ({node}) {
  return (
    <Flex bg='muted' variant='container.flex'>
      <h4>{node.title}</h4>
      <div>
        <h4>Hraéfni</h4>
        <IngredientList ingredient={node.ingredients} />
      </div>
    </Flex>
  )
}

export default ListWithImage
