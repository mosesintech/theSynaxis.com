import React from "react"

import { FlexibleContentProps } from "../../interfaces"

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
      <h1>LIST</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default List
