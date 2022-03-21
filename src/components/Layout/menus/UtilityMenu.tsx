import React from "react"

import Edges from "../Edges"

export default function UtilityMenu() {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "0",
          color: "#FFFFFF",
          alignItems: "center",
        }}
        className="bg-indigo-500"
      >
        <Edges size="lg">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <p>Utility Menu Text</p>
            <p>Utility Menu Text</p>
          </div>
        </Edges>
      </div>
    </>
  )
}
