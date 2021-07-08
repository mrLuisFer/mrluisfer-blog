import { icons } from './icons'

type ReturnIconProperties = {
  icon: string
  iconName: string
}

export const useGetIconByTag = (tag: string): ReturnIconProperties => {
  console.log(tag)
  const lowerTag: string = tag.toLowerCase()

  const found = icons.find((icon) => icon.iconName.toLowerCase() === lowerTag)
  console.log(found)
  if (found?.icon === undefined) {
    return { icon: '', iconName: '' }
  }
  const icon = found?.icon
  const iconName = found?.iconName
  return { icon, iconName }
}
