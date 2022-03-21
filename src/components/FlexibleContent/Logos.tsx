import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface LogosProps extends FlexibleContentProps {
  logosTitle?: string
  logosText?: string
  logosBackgroundColor?: string
  logosButton?: {
    target?: string
    title?: string
    url?: string
  }
  logos?: []
}

const Logos: React.FC<LogosProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>LOGOS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Logos
