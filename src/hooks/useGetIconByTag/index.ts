import { icons } from './icons'

export const useGetIconByTag = (tag: string) => {
  console.log(tag)
  const lowerTag = tag.toLowerCase()

  const found = icons.find((icon) => icon.iconName.toLowerCase() === lowerTag)
  console.log(found)
  if (found?.icon === undefined) {
    return { icon: '' }
  }
  const icon = found?.icon
  return { icon }
}
