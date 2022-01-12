import React from "react"

import { FlexibleContentProps } from "../../interfaces"

export interface SwitchProps extends FlexibleContentProps {
  switchTitle?: string
  switchText?: string
  switchBackgroundColor?: string
  switchOptions?: []
}

const Switch: React.FC<SwitchProps> = props => {
  return (
    <>
      <h1>SWITCH</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Switch
