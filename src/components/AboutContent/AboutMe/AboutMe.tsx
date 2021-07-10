import { useState } from 'react'
import Card from './Card/Card'
import { AboutMeButton } from './AboutMe.styles'

export default function AboutMe() {
  const [showInfo, setShowInfo] = useState<boolean>(false)

  return (
    <div>
      <AboutMeButton
        onClick={() => setShowInfo(!showInfo)}
        title={showInfo ? 'Cerrar informacion' : 'Saber mas sobre mrLuisFer'}
        buttonWidth='200px'
      >
        {showInfo ? 'Mostrar menos' : 'Sobre mi?'}
      </AboutMeButton>
      {showInfo && <Card />}
    </div>
  )
}
