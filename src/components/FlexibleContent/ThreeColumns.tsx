import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface ThreeColumnsProps extends FlexibleContentProps {
  threeColumnsTitle?: string
  threeColumnsText?: string
  threeColumnsBackgroundColor?: string
  threeColumnsButton?: {
    target?: string
    title?: string
    url?: string
  }
  columns?: [
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
    },
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
    },
    {
      title?: string
      text?: string
      link?: {
        target?: string
        title?: string
        url?: string
      }
      image?: {}
    }
  ]
}

const ThreeColumns: React.FC<ThreeColumnsProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>THREE COLUMNS</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default ThreeColumns
