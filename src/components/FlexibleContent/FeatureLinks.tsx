import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

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
      <Edges size="lg">
        <h1>FEATURE LINKS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default FeatureLinks
