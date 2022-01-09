import React from "react"

const DataTable = props => {
  return (
    <>
      <h1>DATA TABLE</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default DataTable
