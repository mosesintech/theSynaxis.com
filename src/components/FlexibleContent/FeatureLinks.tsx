import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface FeatureLinksProps extends FlexibleContentProps {
  featureLinksTitle?: string
  featureLinksText?: string
  featureLinksBackgroundColor?: string
  featureLinksButton?: {
    target?: string
    title?: string
    url?: string
  }
  featureLinks?: []
}

const FeatureLinks: React.FC<FeatureLinksProps> = props => {
  return (
    <>
      <h1>FEATURE LINKS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default FeatureLinks
