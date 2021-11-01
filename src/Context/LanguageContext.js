import React, { createContext, useState, useEffect } from 'react'

import services from 'Services/pokemons-services'

export const Context = createContext()

const initialState = localStorage.getItem('language') || 'spanish'

const Provider = ({ children }) => {
    
  const [language, setLanguage] = useState(initialState)
  const [statsInDiffLanguage, setStatsInDiffLanguage] = useState({})
  const [loading, setLoading] = useState(false)
  const isSpanish = language === 'spanish'

  useEffect(() => {

    const transformKey = ({text}) => (
      text.replaceAll(' ', '-').toLowerCase()
    )

    try{
      const statsInSpanish = []
      const statsInEnglish = []
      const getDataInDiffLanguages  = async () => {
        setLoading(true)
        const limit = 8  
        for (let i = 1; i <= limit; i++){
          const data = await services.getItemLanguage({id: i})
          data.names.map(({language, name}) => {
            language.name === 'es' && statsInSpanish.push([transformKey({ text: data.name}), name])
            language.name === 'en' && statsInEnglish.push([transformKey({ text: name }), name])
          })
        }    
        setStatsInDiffLanguage({
          english: Object.fromEntries(statsInEnglish),
          spanish: Object.fromEntries(statsInSpanish)
        })
        setLoading(false)    
      }
      !Object.keys(statsInDiffLanguage).length && getDataInDiffLanguages()
      
    }catch(err){
      setLoading(false)
      console.log('asdasddsdssd',err)
    }
     
  }, [])

  const changeLanguage = ({languageValue}) => {
    setLanguage(languageValue)
    localStorage.setItem('language', languageValue)
  }

  const value = {
    language,
    isSpanish,
    loading,
    statsInDiffLanguage,
    changeLanguage
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
