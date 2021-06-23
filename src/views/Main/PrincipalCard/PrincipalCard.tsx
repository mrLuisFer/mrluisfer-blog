import IconCloseDark from 'src/assets/close-icon-dark.svg'

import { PrincipalCardFlex } from './principalCard.styles'

export default function PrincipalCard() {
  return (
    <div>
      <PrincipalCardFlex>
        <h2>Espero disfrutes estar aqui, te cuento un poquito sobre el porque de este Blog</h2>
        <img src={IconCloseDark} alt='Close principal card' draggable='false' />
      </PrincipalCardFlex>
      <p>Principal Card</p>
    </div>
  )
}
