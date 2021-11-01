import React, { useContext } from 'react'

import { Context as LanguageContext } from 'Context/LanguageContext'
import usePokemons from 'Hooks/usePokemons'

import Progress from 'Components/Pogress'
import PageError from 'Pages/PageError'
import ContainerCard from 'Components/Card/ContainerCard'

import '../../Components/Layout/Header/styles.css'
import './styles.css'

const Home = () => {

  const { morePokemons, loading, error } = usePokemons()
  const { isSpanish } = useContext(LanguageContext)
  const infoButton = isSpanish ? 'Cargar más' : 'Load more'

  const handleOnClick = () => {
    morePokemons()
  }

  if (loading){
    return(
      <div className='flex'>
        <Progress/>        
      </div>
    )
  }
  if(error.error){
    return(
      <PageError/>
    )
  }

  return (
    <>
      <ContainerCard/>
      <div className='containerButton'>
        <button className='button-loadMore' onClick={handleOnClick}>
          {infoButton}
        </button>
      </div>
    </>
  )
}

export default Home
