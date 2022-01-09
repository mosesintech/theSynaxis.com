import React from "react"

const TextBlock = props => {
  return (
    <>
      <h1>TEXT BLOCK</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default TextBlock
