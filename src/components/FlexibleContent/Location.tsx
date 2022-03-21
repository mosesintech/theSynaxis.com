import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface LocationProps extends FlexibleContentProps {
  locationTitle?: string
  locationText?: string
  locationBackgroundColor?: string
  locationButton?: {
    target?: string
    title?: string
    url?: string
  }
  locationMap?: string
  locationAddress?: string
  locationPhoneNumber?: string
  locationHours?: string
}

const Location: React.FC<LocationProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>LOCATION</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default Location
