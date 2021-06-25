import { useEffect, useState } from 'react'
import HeaderTitle from '../../components/MainContent/HeaderTitle/HeaderTitle'
import PrincipalCard from '../../components/MainContent/PrincipalCard/PrincipalCard'

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
      <HeaderTitle />
      {showPrincipalCard ? <PrincipalCard setShowPrincipalCard={setShowPrincipalCard} /> : ''}
      <p>Main</p>
    </main>
  )
}
