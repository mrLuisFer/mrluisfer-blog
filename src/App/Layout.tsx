import ToggleTheme from '../components/ToggleTheme/ToggleTheme'
import Nav from '../components/Header/Nav/Nav'
import Header from '../components/Header/Header'

type LayoutProps = {
  setThemeState: Function | React.Dispatch<React.SetStateAction<string>>
}

export default function Layout({ setThemeState }: LayoutProps) {
  return (
    <div>
      <div>
        <Header>
          <Nav />
          <ToggleTheme setThemeState={setThemeState} />
        </Header>
      </div>
    </div>
  )
}
