import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface CTAProps extends FlexibleContentProps {
  ctaTitle?: string
  ctaContent?: string
  ctaPhoneNumber?: string
  ctaBackgroundColor?: string
  ctaButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const CallToAction: React.FC<CTAProps> = props => {
  const {
    title,
    // uri,
    // slug,
    // ctaTitle,
    // ctaContent,
    // ctaPhoneNumber,
    // ctaBackgroundColor,
    // ctaButton,
  } = props

  return (
    <>
      <Edges size="lg">
        <h1>CALL TO ACTION</h1>
        <pre>{JSON.stringify(title, null, 2)}</pre>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default CallToAction
