import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import SingleForm from "./SingleForm"

function CallToAction(props: any) {
  const { title, text, form, button } = props

  return (
    <>
      <div className="bg-white py-16 sm:py-24">
        <div className="relative sm:py-16">
          <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div>
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div
                aria-hidden="true"
                className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
              >
                <svg
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 1463 360"
                >
                  <path
                    className="text-indigo-500 text-opacity-40"
                    fill="currentColor"
                    d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                  />
                  <path
                    className="text-indigo-700 text-opacity-40"
                    fill="currentColor"
                    d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                  />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2
                    className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"
                    children={title}
                  />

                  <p
                    className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200"
                    children={text}
                  />
                </div>

                {form && (
                  <>
                    <FormContainer>
                      <SingleForm form={form} />
                    </FormContainer>
                  </>
                )}

                {button && (
                  <ButtonContainer>
                    <Link to={button?.url}>
                      <button children={button?.title} />
                    </Link>
                  </ButtonContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CallToAction

const FormContainer = styled.div`
  position: relative;
  color: #fff;
  margin: 0 auto;

  @media (min-width: 1300px) {
    width: 50%;
  }

  label {
    display: none;
  }

  button {
    display: block;
    width: 100%;
    color: #fff;
    border-radius: 0.375rem;
    border-color: transparent;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #6366f1;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    :hover {
      color: #818cf8;
      background-color: #eef2ff;
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: var(#4f46e5) 0 0 0 calc(2px + var(2px)) var(rgb(255 255 255));
    }

    @media (min-width: 640px) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  input[type="email"] {
    display: block;
    width: 100%;
    border-radius: 0.375rem;
    border-color: transparent;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(17 24 39);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    ::placeholder {
      color: rgb(107 114 128);
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: var(#4f46e5) 0 0 0 calc(2px + var(2px)) var(rgb(255 255 255));
    }
  }

  form {
    @media (min-width: 640px) {
      margin: 0 auto;
      margin-top: 3rem;
      max-width: 100%;
      display: flex;
    }

    &--small {
      width: calc(100% / 3);
    }
    &--medium {
      width: 50%;
    }
    &--large {
      width: 100%;
    }
  }
`

const ButtonContainer = styled.div`
  button {
    display: block;
    width: 100%;
    color: #fff;
    border-radius: 0.375rem;
    border-color: transparent;
    margin-top: 1.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: #6366f1;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

    :hover {
      color: #818cf8;
      background-color: #eef2ff;
    }

    :focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      box-shadow: var(#4f46e5) 0 0 0 calc(2px + var(2px)) var(rgb(255 255 255));
    }

    @media (min-width: 640px) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }
`
