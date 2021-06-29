import { useContext } from 'react'
import { ContentTextStyled } from './ContentText.styles'
import { ThemeContext } from 'src/App/ThemeContext/ThemeContext'

export default function ContentText() {
  const { isDarkMode } = useContext(ThemeContext)

  console.log(`Contenxt in about: ${isDarkMode}`)

  return (
    <ContentTextStyled isDarkMode={isDarkMode}>
      <p>
        Este <span>blog</span> fue hecho con la intencion de{' '}
        <span>compartir experiencias y aprendizajes</span> que pueden ayudar a mas personas que
        estan aprendiendo <span>programación</span>
      </p>
      <p>
        No planeo tener un blog muy profesional o gigante, sino un lugar especial hecho por mi,
        donde pueda <span>compartir lo que desee</span>
      </p>
      <p>
        Y al mismo tiempo este personalizado a mi manera y a mi gusto para tener una navegacion y
        lectura sencilla
      </p>
      Tambien comparto en
      <a href='https://dev.to/' target='_blank' rel='noreferrer'>
        Dev.to
      </a>
      algunos <span>articulos mas imporantes</span> o que estan un poco mejor estructurados o
      escritos que puedes revisar <span>:)</span>
    </ContentTextStyled>
  )
}
