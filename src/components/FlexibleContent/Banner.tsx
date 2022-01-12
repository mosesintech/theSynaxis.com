import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface BannerProps extends FlexibleContentProps {
  bannerTitle?: string
  bannerContent?: string
  bannerBackgroundColor?: string
  bannerLink?: {
    target?: string
    title?: string
    url?: string
  }
}

const Banner: React.FC<BannerProps> = props => {
  const {
    title,
    uri,
    slug,
    bannerTitle,
    bannerContent,
    bannerBackgroundColor,
    bannerLink,
  } = props

  return (
    <>
      <h1>BANNER</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Banner
