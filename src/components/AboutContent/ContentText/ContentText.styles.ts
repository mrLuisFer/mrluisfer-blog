import styled from 'styled-components'

export const ContentTextStyled = styled.div`
  p {
    letter-spacing: 0.1px;
    line-height: 1.8;
  }

  span {
    font-weight: 500;

    &:hover {
      color: var(--blue);
    }
  }

  a {
    text-decoration: none;
    text-decoration-color: var(--blue);
    position: relative;
    display: inline-block;
    color: ${(props) => props.theme.color};
    border-radius: var(--radius);
    padding: 0.1rem 0.3rem;
    transition: var(--transition);

    &:hover {
      background: var(--purple);
      color: var(--grey);
    }
  }
`
