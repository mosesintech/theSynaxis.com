import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import {
  BookOpenIcon,
  ChatAltIcon,
  MailIcon,
  MenuIcon,
  PlayIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"

import MobileMenu from "./MobileMenu"

const solutions = [
  {
    name: "Scripture Reader",
    description:
      "Read the Holy Bible in our elegant reader app. Holy Fathers commentary comming soon!",
    href: "https://synaxisapp.netlify.app/scripture",
    icon: BookOpenIcon,
  },
  {
    name: "The Sayings",
    description:
      "A powerful app that collects and presents the words of the Saints.",
    href: "https://synaxisapp.netlify.app/sayings",
    icon: ChatAltIcon,
  },
  {
    name: "The Synaxis",
    description:
      "A community app for the Orthodox to help each other along the path towards God.",
    href: "https://synaxisapp.netlify.app/synaxis",
    icon: UserGroupIcon,
  },
]
const callsToAction = [
  {
    name: "Take The Tour",
    href: "https://synaxisapp.netlify.app/tour",
    icon: PlayIcon,
  },
  { name: "Contact Us", href: "/contact", icon: MailIcon },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function DesktopMenu() {
  return (
    <>
      <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start items-center lg:w-0 lg:flex-1">
              <Link to="/" className="h-8 w-auto sm:h-10">
                <img
                  src="/images/synaxis.jpeg"
                  alt="The Synaxis"
                  height="50px"
                  width="50px"
                />
              </Link>
              <Link
                to="/"
                className="px-5 text-black hover:text-black font-headingStyled hover:font-headingStyled cursor-pointer hover:no-underline"
              >
                The Synaxis
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      )}
                    >
                      <span>Apps</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map(item => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="p-3 flex items-start hover:no-underline rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map(item => (
                              <div key={item.name} className="flow-root">
                                <Link
                                  to={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <Link
                to="/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>

              <Link
                to="/news"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                News
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="https://synaxisapp.netlify.app/login"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                data-modal-toggle="authentication-modal"
              >
                Sign in
              </a>

              <a
                href="https://synaxisapp.netlify.app/register"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 hover:no-underline"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>

        <MobileMenu />
      </Popover>
    </>
  )
}
