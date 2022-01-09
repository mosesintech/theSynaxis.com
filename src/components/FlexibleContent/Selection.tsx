import React from "react"

const Selection = props => {
  return (
    <>
      <h1>SELECTION</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Selection
