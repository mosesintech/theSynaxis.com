import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface HeroProps extends FlexibleContentProps {
  heroTitle?: string;
  heroText?: string;
  heroBackgroundColor?: string;
  heroBackgroundVideo?: string;
  heroBackgroundImage?: {};
  heroGallery?: [];
  heroButton?: {
    target?: string;
    title?: string;
    url?: string;
  }
}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <>
      <h1>HERO</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Hero
