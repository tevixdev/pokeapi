import React, { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { Context as LanguageContext } from 'Context/LanguageContext'

import usePokemons from 'Hooks/usePokemons'
import pokdedexImg from 'Assets/Img/pokedex.png'

import { HOME } from 'Constants/routes'
import './styles.css'
import Loader from 'Components/Pogress'

const Detail = () => {
 
  const { 
    statsInDiffLanguage, 
    language, 
    loading: loadingStat,
    isSpanish 
  } = useContext(LanguageContext)


  const location = useLocation()
  const history = useHistory()
  const { pokemons, loading, singlePokemon } = usePokemons()
  let loadImg = false
  const titleStat = isSpanish  ? 'Estadísticas' : 'Stats'
  const titleAbilities = isSpanish  ? 'Habilidades' : 'Abilities'

  const goBack = () => {
    history.push(HOME)
  }

  const handleOnLoad = (loadImg) => {
    loadImg = true
  }
  
  if (loading 
    || (!Object.keys(singlePokemon).length && !pokemons.length)
    || loadingStat){
    return(
      <div className='flex'>
        <Loader/>
      </div>
    )
  }

  const pokemon = pokemons.length ? pokemons.find(({name}) => {
    return location.pathname.includes(name)
  }) : singlePokemon

  return (
    <> 
      <button className='button-back' onClick={goBack}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <div className='flex'>
        <div className='container-pokedex'>          
          <img 
            alt={pokemon.name}
            className='img-pokemon-pokedex'
            src={pokemon.sprites.front_default}
          />
          <img 
            alt='Pokedex details'
            className='pokedex-img' 
            onLoad={() => handleOnLoad(loadImg)}
            src={pokdedexImg}
          />
          <ul className='stats-pokedex'>
            <p className='information-title'>{titleAbilities}</p>
            {pokemon.abilities.map(({ ability: { name } }) => (
              <li key={name}>
                {name}
              </li>
            ))}
            <p className='information-title'>{titleStat}</p>
            {pokemon.stats.map(pokemon => (
              <li key={pokemon.stat.name}>
                {`${pokemon.base_stat} -   
              ${statsInDiffLanguage[language][pokemon.stat.name]}               
              `}
              </li>
            ))}
          </ul>
        </div>  
      </div> 
    </>
  ) 
}

export default Detail
