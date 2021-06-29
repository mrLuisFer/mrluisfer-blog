import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 400px;
  text-align: center;
  border-radius: var(--radius);
  padding: 0.5rem;
  box-shadow: 0.5px 0.5px 5px var(--shadow-color);
  color: #000;
  background: var(--blue);

  p {
    line-height: 1.5;
    margin: 0.5rem 0;
    font-weight: 300;
  }
`

export const CardTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
`
