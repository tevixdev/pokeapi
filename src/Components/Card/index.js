import React from 'react'
import { useHistory } from 'react-router-dom'

import useScrolling from 'Hooks/useScrolling'
import './styles.css'

const Card = ({ name, img}) => {

  const { cardRef, SetScrollToElement, scrollTop } = useScrolling()
  const history = useHistory()

  const handleOnClick = () => {    
    const positionScroll = document.documentElement.scrollTop
    SetScrollToElement(positionScroll)
    history.push(`/detail/${name}`)
  }

  return (
    <div className='card' onClick={handleOnClick} ref={cardRef}>
      <img alt={name} className='img-card'  src={img}/>
      <div className='namePokemon-card'>{name}</div>
    </div>

  )
}

export default Card
