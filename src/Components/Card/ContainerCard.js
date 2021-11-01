import React, { useEffect, useContext } from 'react'

import { Context as PokemonContext } from 'Context/PokemonContext'
import Card from './index'

const ContainerCard = () => {
  const { pokemons } = useContext(PokemonContext)

  useEffect(() => {
    window.scrollTo({
      top: document.querySelector('.container-card').scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
  }, [pokemons])

  return (
    <main className='container-card'>
      {
        pokemons.map(({ id, name, sprites: { front_default }}) => (          
          <Card img={front_default} key={id} name={name}/>          
        ))
      }
    </main>
  )
}

export default ContainerCard
