import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface ListProps extends FlexibleContentProps {
  listTitle?: string
  listText?: string
  listBackgroundColor?: string
  listButton?: {
    target?: string
    title?: string
    url?: string
  }
  list?: []
}

const List: React.FC<ListProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>LIST</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default List
