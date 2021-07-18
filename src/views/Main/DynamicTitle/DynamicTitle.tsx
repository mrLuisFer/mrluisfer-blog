import { cssVariables } from 'src/styles/utils/cssVariables'
import { HeaderTitle } from 'src/components/MainContent'
import { useEffect, useState } from 'react'

export default function DynamicTitle() {
  const [changeTitle, setChangeTitle] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChangeTitle(true)
    }, 4000)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <div>
      {changeTitle ? (
        <HeaderTitle titleText='Últimos artículos 📚' lineColor={cssVariables.green} />
      ) : (
        <HeaderTitle titleText='Bienvenido a mi Blog :D' />
      )}
    </div>
  )
}
