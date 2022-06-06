import { AboutMeButton } from './AboutMe.styles'
import { useState } from 'react'
import Card from './Card/Card'

export default function AboutMe() {
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <>
      <AboutMeButton
        onClick={() => setShowInfo(showInfo)}
        title={showInfo ? 'Cerrar informacion' : 'Saber mas sobre mrLuisFer'}
        buttonWidth='200px'
      >
        {showInfo ? 'Mostrar menos' : 'Sobre mí?'}
      </AboutMeButton>
      {showInfo && <Card />}
    </>
  )
}
