import React, { ReactNode } from 'react'

export type TRoute = {
  routeName: string
  url: string
  component: JSX.Element | ReactNode | React.FC | any
  exact?: boolean
}
