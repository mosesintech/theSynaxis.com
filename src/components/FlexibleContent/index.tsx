import React from "react"

import Banner from "./Banner"
import CallToAction from "./CallToAction"
import Carousel from "./Carousel"
import CompareProducts from "./CompareProducts"
import DataTable from "./DataTable"
import FeatureLinks from "./FeatureLinks"
import Gallery from "./Gallery"
import Hero from "./Hero"
import LatestArticles from "./LatestArticles"
import LinkBoxes from "./LinkBoxes"
import LinkPanels from "./LinkPanels"
import List from "./List"
import Logos from "./Logos"
import NavBlock from "./NavBlock"
import Selection from "./Selection"
import SupportTiers from "./SupportTiers"
import Switch from "./Switch"
import TextArea from "./TextArea"
import TextBlock from "./TextBlock"
import TextImage from "./TextImage"
import ThreeColumns from "./ThreeColumns"
import Videos from "./Videos"

const components = {
  Banner,
  CallToAction,
  Carousel,
  CompareProducts,
  DataTable,
  FeatureLinks,
  Gallery,
  Hero,
  LatestArticles,
  LinkBoxes,
  LinkPanels,
  List,
  Logos,
  NavBlock,
  Selection,
  SupportTiers,
  Switch,
  TextArea,
  TextBlock,
  TextImage,
  ThreeColumns,
  Videos,
}

const FlexibleContent = props => {
  const { modules, data } = props

  if (!!modules) {
    return modules
      .filter(o => !!o)
      .map(({ fieldGroupName, ...moduleData }, index) => {
        if (!fieldGroupName) {
          return null
        }

        const type = fieldGroupName.split("_").slice(-1)[0]

        const Component = components[type]

        return (
          Component && (
            <div key={index}>
              <Component {...moduleData} {...data} />
            </div>
          )
        )
      })
  }
}

export default FlexibleContent
