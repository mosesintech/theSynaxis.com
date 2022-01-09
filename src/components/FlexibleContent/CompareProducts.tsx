import React from "react"

const CompareProducts = props => {
  return (
    <>
      <h1>COMPARE PRODUCTS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default CompareProducts
