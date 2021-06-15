import { PropsWithChildren } from 'react'

export default function Header({ children }: JSX.ElementChildrenAttribute | PropsWithChildren<{}>) {
  return (
    <header>
      <h1>mrLuisFer</h1>
      {children}
    </header>
  )
}
