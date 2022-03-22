import React from "react"
import styled from "@emotion/styled"
import CookieConsent from "react-cookie-consent"

const CookieBanner = () => {
  return (
    <Banner>
      <CookieConsent
        location="bottom"
        cookieName="thesynaxis-cookie"
        buttonText="Accept"
        buttonClasses="consent-button"
        containerClasses="consent"
        contentClasses="consent-content"
        disableButtonStyles={true}
        expires={150}
      >
        <h4>
          This website uses cookies. By continuing to use this website you are
          agreeing to our use of cookies as described in our Privacy Policy.
        </h4>
      </CookieConsent>
    </Banner>
  )
}

export default CookieBanner

const Banner = styled.div`
  .consent {
    padding: 30px 10px;

    @media (min-width: 768px) {
      padding: 0 100px;
    }

    @media (min-width: 2100px) {
      padding: 0 600px;
    }
  }

  .consent-content {
    margin-right: 20px;
  }

  .consent-button {
    background: rgb(29 78 216);
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    padding: 5px 10px;
    margin-left: 10px;
    font-weight: 500;
    line-height: 23px;
    font-size: 15px;
    font-style: normal;
    border-radius: 4px;
    border: 0;
  }
`
