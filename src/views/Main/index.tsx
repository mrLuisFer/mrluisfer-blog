import { AllPosts, PrincipalCard, HeaderTitle } from 'src/components/MainContent'
import { useEffect, useState } from 'react'
import Head from 'src/components/common/Head/Head'
import { cssVariables } from 'src/styles/utils/cssVariables'

export default function Main() {
  const [showPrincipalCard, setShowPrincipalCard] = useState<boolean>(false)

  useEffect(() => {
    const storageValue = localStorage.getItem('principalCard')
    storageValue === 'closed' ? setShowPrincipalCard(false) : setShowPrincipalCard(true)
  }, [])

  return (
    <main>
      <Head
        title='mrLuisFer 👨‍💻 | Frontend, Javascript, React, CSS, TypeScript, HTML'
        description='Blog hecho para aprender sobre desarrollo web y tecnologias para el frontend'
        keyWords='Blog React Javascript Typescript'
      />
      <HeaderTitle titleText='Últimos artículos 📚' lineColor={cssVariables.green} />
      {showPrincipalCard && <PrincipalCard setShowPrincipalCard={setShowPrincipalCard} />}
      <br />
      <AllPosts />
    </main>
  )
}
