import { Button } from 'src/components/common/Button/Button.styles'
import { NewsLetterFormStyled, FormLabel, FormInput } from './NewsLetterForm.styles'
import { useState, FormEvent } from 'react'
import ComingMsg from './ComingMsg/ComingMsg'

export default function NewsLetterForm() {
  const inputName = 'letter-input'
  const [showComingMessage, setShowComingMessage] = useState(false)

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()
    setShowComingMessage(true)

    setTimeout(() => {
      setShowComingMessage(false)
    }, 1500)
  }

  return (
    <NewsLetterFormStyled>
      {showComingMessage && <ComingMsg />}
      <form onSubmit={handleOnSubmit}>
        <FormLabel htmlFor={inputName}>News Letter?</FormLabel>
        <FormInput type='email' id={inputName} name={inputName} placeholder='tuCorreo@gmail.com' />
        <Button
          type='submit'
          title='Suscribete para recibir nuevas actualizaciones!'
          buttonWidth='100%'
        >
          Suscribirse :D
        </Button>
      </form>
    </NewsLetterFormStyled>
  )
}
