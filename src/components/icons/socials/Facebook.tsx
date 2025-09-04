import { FC, SVGProps } from "react"

const FacebookIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none" {...props}>
      <rect width="52" height="52" rx="26" fill="#141414"/>
      <path d="M29.7442 17.984H32.0002V14.168C30.9079 14.0545 29.8104 13.9984 28.7122 14C25.4482 14 23.2162 15.992 23.2162 19.64V22.784H19.5322V27.056H23.2162V38H27.6322V27.056H31.3042L31.8562 22.784H27.6322V20.06C27.6322 18.8 27.9682 17.984 29.7442 17.984Z" fill="white"/>
    </svg>
  )
}

export default FacebookIcon
