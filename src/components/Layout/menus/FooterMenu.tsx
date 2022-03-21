import React from "react"
import { Link } from "gatsby"

export default function FooterMenu() {
  return (
    <>
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="flex items-center">
            <h3 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-headingStyled">
              The Synaxis
            </h3>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              The Synaxis
            </h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/about" className="hover:underline ">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/news" className="hover:underline">
                  News
                </Link>
              </li>
              <li className="mb-4">
                <a
                  href="https://app.thesynaxis.com/tour"
                  className="hover:underline"
                >
                  Tour
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Apps
            </h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://app.thesynaxis.com/scripture"
                  className="hover:underline"
                >
                  Scripture
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://app.thesynaxis.com/sayings"
                  className="hover:underline"
                >
                  The Sayings
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://app.thesynaxis.com/synaxis"
                  className="hover:underline"
                >
                  The Synaxis
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h3>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
