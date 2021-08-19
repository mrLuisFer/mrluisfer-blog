type SidebarLinkImgProps = {
  iconSvg: string
  altIconSvg: string
}

export default function SidebarLinkImg({ altIconSvg, iconSvg }: SidebarLinkImgProps) {
  return <img src={iconSvg} alt={altIconSvg} title={altIconSvg} />
}
