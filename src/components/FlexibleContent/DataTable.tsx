import React from "react"

import { FlexibleContentProps } from "../../interfaces"

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
      <h1>DATA TABLE</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default DataTable
