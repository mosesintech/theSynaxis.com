import React, { Fragment } from 'react';
import { Link } from "gatsby"
import { Popover, Transition } from "@headlessui/react"
import {
    BookOpenIcon,
    ChatAltIcon,
    MailIcon,
    PlayIcon,
    UserGroupIcon,
    XIcon,
  } from "@heroicons/react/outline"
  
const solutions = [
    {
      name: "Scripture Reader",
      description:
        "Read the Holy Bible in our elegant reader app. Holy Fathers commentary comming soon!",
      href: "https://app.thesynaxis.com/scripture",
      icon: BookOpenIcon,
    },
    {
      name: "The Sayings",
      description:
        "A powerful app that collects and presents the words of the Saints.",
      href: "https://app.thesynaxis.com/sayings",
      icon: ChatAltIcon,
    },
    {
      name: "The Synaxis",
      description:
        "A community app for the Orthodox to help each other along the path towards God.",
      href: "https://app.thesynaxis.com/synaxis",
      icon: UserGroupIcon,
    },
]
  
export default function MobileMenu() {
    return (
        <>
        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src="/images/synaxis.jpeg"
                        alt="The Synaxis"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map(item => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <a
                      href="https://app.thesynaxis.com/tour"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Tour
                    </a>

                    <Link
                      to="/contact"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <a
                      href="https://app.thesynaxis.com/register"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing user?{" "}
                      <a
                        href="https://app.thesynaxis.com/login"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
    )
}