import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface SwitchProps extends FlexibleContentProps {
  switchTitle?: string
  switchText?: string
  switchBackgroundColor?: string
  switchOptions?: []
}

const Switch: React.FC<SwitchProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>SWITCH</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Switch
