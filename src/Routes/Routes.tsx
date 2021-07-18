import { Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import Content from 'src/components/common/Content/Content'

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
