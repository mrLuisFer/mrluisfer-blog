import { useEffect, useState } from 'react'
import HeaderTitle from '../../components/MainContent/HeaderTitle/HeaderTitle'
import PrincipalCard from '../../components/MainContent/PrincipalCard/PrincipalCard'
import Head from 'src/components/Head/Head'

export default function Main() {
  const [showPrincipalCard, setShowPrincipalCard] = useState<boolean>(false)

  useEffect(() => {
    const storageValue = localStorage.getItem('principalCard')
    if (storageValue === 'closed') {
      setShowPrincipalCard(false)
    } else {
      setShowPrincipalCard(true)
    }
  }, [])

  return (
    <main>
      <Head
        title='mrLuisFer | Blog'
        description='Blog hecho para aprender sobre desarrollo web y tecnologias para el frontend'
        keyWords='Blog React Javascript Typescript'
      />
      <HeaderTitle />
      {showPrincipalCard ? <PrincipalCard setShowPrincipalCard={setShowPrincipalCard} /> : ''}
      <p>Main</p>
    </main>
  )
}
