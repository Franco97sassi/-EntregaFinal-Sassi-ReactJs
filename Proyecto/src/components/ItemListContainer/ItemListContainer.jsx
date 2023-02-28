import React from 'react'

const ItemListContainer = ({txtBtn,handleClick}) => {
  return <button onClick={handleClick}>  {txtBtn}</button>
}

export default ItemListContainer 