import * as React from "react"

import Layout from "../components/Layout/Layout"
import Edges from "../components/Layout/Edges"


const NotFoundPage = () => (
  <Layout title="404: Not found">
    <Edges size="lg">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Edges>
  </Layout>
)

export default NotFoundPage
