import React from "react"

const Form = props => {
  return (
    <>
      <h1>FORM</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default Form
