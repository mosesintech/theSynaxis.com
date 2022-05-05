import * as React from "react"

import Seo from "../Seo"
import Header from "./Header"
import Footer from "./Footer"
import Breadcrumbs from "./Breadcrumbs"
import CookieBanner from "../CookieConsent"
import "../../styles/index.css"

interface LayoutProps {
  children: React.ReactNode
  title?: string
  archivePath?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title, archivePath }) => {
  return (
    <>
      <Seo title={title} />
      <Header />
      <Breadcrumbs title={title} archivePath={archivePath} />
      {children}
      <CookieBanner />
      <Footer />
    </>
  )
}

export default Layout
