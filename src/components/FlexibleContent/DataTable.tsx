import React from "react"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

export interface DataTableProps extends FlexibleContentProps {
  dataTableTitle?: string
  dataTableText?: string
  dataTableBackgroundColor?: string
  dataTableButton?: {
    target?: string
    title?: string
    url?: string
  }
  dataTable?: {
    columns?: []
  }
}

const DataTable: React.FC<DataTableProps> = props => {
  return (
    <>
      <Edges size="lg">
        <h1>DATA TABLE</h1>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </Edges>
    </>
  )
}

export default DataTable
