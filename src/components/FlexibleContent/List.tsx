import React from "react"

const List = props => {
  return (
    <>
      <h1>LIST</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default List
