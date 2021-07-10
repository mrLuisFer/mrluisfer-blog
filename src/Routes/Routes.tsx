import { Route, Switch } from 'react-router-dom'
import Content from 'src/components/common/Content/Content'
import { routes } from './routes'

export default function Routes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route path={route.url} exact={route.exact} key={route.routeName}>
          <Content>{route.component}</Content>
        </Route>
      ))}
    </Switch>
  )
}
