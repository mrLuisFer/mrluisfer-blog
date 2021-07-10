import { icons } from './icons'

type ReturnIconProperties = {
  icon: string
  iconName: string
}

export const useGetIconByTag = (tag: string): ReturnIconProperties => {
  const lowerTag: string = tag.toLowerCase()

  const found = icons.find((icon) => icon.iconName.toLowerCase() === lowerTag)
  if (found?.icon === undefined) {
    return { icon: '', iconName: '' }
  }
  const icon = found?.icon
  const iconName = found?.iconName
  return { icon, iconName }
}
