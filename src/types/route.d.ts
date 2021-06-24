import { ReactNode, JSX, FC } from 'react'

export type TRoute = {
  routeName: string
  url: string
  component: JSX.Element | ReactNode | FC | any
  exact?: boolean
}
