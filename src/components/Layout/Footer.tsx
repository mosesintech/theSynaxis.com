import React from "react"

import Edges from "./Edges"
import FooterMenu from "./menus/FooterMenu"
import FooterSocials from "../socials/FooterSocials"

export default function Footer() {
  return (
    <>
      <Edges size="lg">
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
          <FooterMenu />
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="/" className="hover:underline">
                The Synaxis
              </a>
              . All Rights Reserved.
            </span>
            <FooterSocials />
          </div>
        </footer>
      </Edges>
    </>
  )
}
