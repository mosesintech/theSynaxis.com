import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface LinkPanelsProps extends FlexibleContentProps {
  linkPanelsTitle?: string
  linkPanelsText?: string
  linkPanelsBackgroundColor?: string
  linkPanelsButton?: {
    target?: string
    title?: string
    url?: string
  }
  linkPanels?: []
}

const LinkPanels: React.FC<LinkPanelsProps> = props => {
  return (
    <>
      <h1>LINK PANELS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default LinkPanels
