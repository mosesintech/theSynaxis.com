import React from "react"

import { FlexibleContentProps } from "../../interfaces"

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
      <h1>LOGOS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Logos
