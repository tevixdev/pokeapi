import React from 'react'
import { useHistory } from 'react-router-dom'

import './styles.css'

const Card = ({name, img}) => {

  const history = useHistory()

  const handleOnClick = () => {
    history.push(`/detail/${name}`)
  }

  return (
    <div className='card' onClick={handleOnClick}>
      <img alt={name} className='img-card'  src={img}/>
      <div className='namePokemon-card'>{name}</div>
    </div>

  )
}

export default Card
