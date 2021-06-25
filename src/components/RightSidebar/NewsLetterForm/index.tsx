import { useState, FormEvent } from 'react'
import ComingMsg from './ComingMsg/ComingMsg'
import { NewsLetterFormStyled, FormLabel, FormInput, FormButton } from './NewsLetterForm.styles'

export default function NewsLetterForm() {
  const inputName = 'letter-input'
  const [showComingMessage, setShowComingMessage] = useState(false)

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('submitted')
    setShowComingMessage(true)

    setTimeout(() => {
      setShowComingMessage(false)
    }, 1500)
  }

  return (
    <NewsLetterFormStyled>
      {showComingMessage ? <ComingMsg /> : ''}
      <form onSubmit={handleOnSubmit}>
        <FormLabel htmlFor={inputName}>News Letter?</FormLabel>
        <FormInput type='email' id={inputName} name={inputName} placeholder='tuCorreo@gmail.com' />
        <FormButton type='submit'>Suscribirse :D</FormButton>
      </form>
    </NewsLetterFormStyled>
  )
}
