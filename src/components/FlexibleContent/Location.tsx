import React from "react"

import { FlexibleContentProps } from "../../interfaces"

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
      <h1>LOCATION</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Location
