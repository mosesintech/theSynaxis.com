import React from "react"

const TextArea = props => {
  return (
    <>
      <h1>TEXT AREA</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TextArea
