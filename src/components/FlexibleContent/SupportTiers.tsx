import React from "react"

const SupportTiers = props => {
  return (
    <>
      <h1>SUPPORT TIERS</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </>
  )
}

export default SupportTiers
