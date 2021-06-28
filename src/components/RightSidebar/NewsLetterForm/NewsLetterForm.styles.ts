import { userNoSelect } from 'src/styles/utils/userNoSelect'
import styled from 'styled-components'

export const NewsLetterFormStyled = styled.div`
  padding: 20px;
  position: relative;
`

export const FormLabel = styled.label`
  font-weight: 500;
  opacity: 0.95;
  cursor: pointer;
  ${userNoSelect()}
`

export const FormInput = styled.input`
  outline: transparent;
  border: none;
  padding: 0.8rem 0.5rem;
  margin: 1rem 0;
  background: var(--grey);
  border-radius: 5px;
  width: 100%;
  font-size: 1.1rem;
  transition: var(--transition);

  &:hover {
    box-shadow: 1px 2px 4px var(--shadow-color);
    transform: scale(1.01);
  }

  &:offset {
    outline: 2px solid var(--blue);
  }
`

export const FormButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  font-size: 1.1rem;
  background: var(--blue);
  color: var(--light-grey);
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: 1px 2px 4px var(--shadow-color);
  transition: var(--transition);

  &:hover {
    box-shadow: 2px 3px 5px var(--shadow-color);
    transform: scale(1.01);
  }

  &:active {
    opacity: 0.8;
  }
`
