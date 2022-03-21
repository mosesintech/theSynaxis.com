import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

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
    // uri,
    // slug,
    // bannerTitle,
    // bannerContent,
    // bannerBackgroundColor,
    // bannerLink,
  } = props

  return (
    <>
      <Edges size="lg">
        <h1>BANNER</h1>
        <pre>{JSON.stringify(title, null, 2)}</pre>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Banner
