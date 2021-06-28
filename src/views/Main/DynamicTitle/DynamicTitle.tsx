import { useEffect, useState } from 'react'
import { HeaderTitle } from 'src/components/MainContent'

export default function DynamicTitle() {
  const [changeTitle, setChangeTitle] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChangeTitle(true)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      {changeTitle ? (
        <HeaderTitle titleText='Últimos artículos 📚' lineColor='var(--green)' />
      ) : (
        <HeaderTitle titleText='Bienvenido a mi Blog :D' />
      )}
    </>
  )
}
