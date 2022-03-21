import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface LinkBoxesProps extends FlexibleContentProps {
  linkBoxesTitle?: string
  linkBoxesText?: string
  linkBoxesBackgroundColor?: string
  linkBoxesButton?: {
    target?: string
    title?: string
    url?: string
  }
  linkBoxes?: []
}

const LinkBoxes: React.FC<LinkBoxesProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>LINK BOXES</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default LinkBoxes
