import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface IntroProps extends FlexibleContentProps {
  introTitle?: string
  introContent?: string
  introBackgroundColor?: string
  introButton?: {
    target?: string
    title?: string
    url?: string
  }
}

const Intro: React.FC<IntroProps> = props => {
  return (
    <>
      <h1>INTRO</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Intro
