import { NewsLetterFormStyled, FormLabel, FormInput, FormButton } from './NewsLetterForm.styles'

export default function NewsLetterForm() {
  const inputName = 'letter-input'

  return (
    <NewsLetterFormStyled>
      <form action='POST'>
        <FormLabel htmlFor={inputName}>News Letter?</FormLabel>
        <FormInput type='email' id={inputName} name={inputName} placeholder='tuCorreo@gmail.com' />
        <FormButton type='submit'>Suscribirse :D</FormButton>
      </form>
    </NewsLetterFormStyled>
  )
}
