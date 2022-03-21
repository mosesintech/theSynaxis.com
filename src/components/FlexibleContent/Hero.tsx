import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface HeroProps extends FlexibleContentProps {
  heroTitle?: string
  heroText?: string
  heroImage?: {} // Add to WordPress
  heroBackgroundColor?: string
  heroBackgroundVideo?: string
  heroBackgroundImage?: {}
  heroGallery?: []
  heroButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const Hero: React.FC<HeroProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>HERO</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Hero
