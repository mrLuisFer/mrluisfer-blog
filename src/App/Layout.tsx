import Nav from '../components/Header/Nav/Nav'
import Header from '../components/Header/Header'

type LayoutProps = {
  setThemeState: Function | React.Dispatch<React.SetStateAction<string>>
}

export default function Layout({ setThemeState }: LayoutProps) {
  return (
    <div>
      <Header>
        <Nav setThemeState={setThemeState} />
      </Header>
    </div>
  )
}
