import React, { useContext } from 'react'

import { Context as LanguageContext } from 'Context/LanguageContext'
import imgTitle from 'Assets/Img/pokemon-title.png'
import './styles.css'

const Header = () => {
  const { changeLanguage, isSpanish } = useContext(LanguageContext)
  const handleOnChange = (e) => {
    changeLanguage({languageValue: e.target.value})
  }

  return (
    <div className='header'>
      <select className='button' name="select" onChange={handleOnChange}>
        <option selected={isSpanish} value="spanish">Español</option>
        <option selected={!isSpanish} value="english">Inglés</option>
      </select>
      <img 
        alt='header title image'
        className='img-header'
        src={imgTitle}
      />
    </div>
  )
}

export default Header
