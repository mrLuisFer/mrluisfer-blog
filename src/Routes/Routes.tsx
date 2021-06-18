import { Route } from 'react-router-dom'

export default function Routes() {
  return (
    <>
      <Route path='/'>
        <p>Principal</p>
      </Route>
      <Route path='/about'>
        <p>About</p>
      </Route>
    </>
  )
}
