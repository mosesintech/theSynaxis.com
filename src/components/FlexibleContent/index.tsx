import React from "react"

import Banner, { BannerProps } from "./Banner"
import CallToAction, { CTAProps } from "./CallToAction"
import Carousel, { CarouselProps } from "./Carousel"
import CompareProducts, { CompareProductsProps } from "./CompareProducts"
import DataTable, { DataTableProps } from "./DataTable"
import FeatureLinks, { FeatureLinksProps } from "./FeatureLinks"
import Form, { FormProps } from "./Form"
import Gallery, { GalleryProps } from "./Gallery"
import Hero, { HeroProps } from "./Hero"
import Intro, { IntroProps } from "./Intro"
import LatestArticles, { LatestArticlesProps } from "./LatestArticles"
import LinkBoxes, { LinkBoxesProps } from "./LinkBoxes"
import LinkPanels, { LinkPanelsProps } from "./LinkPanels"
import List, { ListProps } from "./List"
import Logos, { LogosProps } from "./Logos"
import NavBlock, { NavBlockProps } from "./NavBlock"
import Selection, { SelectionProps } from "./Selection"
import SupportTiers, { SupportTiersProps } from "./SupportTiers"
import Switch, { SwitchProps } from "./Switch"
import TextArea, { TextAreaProps } from "./TextArea"
import TextBlock, { TextBlockProps } from "./TextBlock"
import TextImage, { TextImageProps } from "./TextImage"
import ThreeColumns, { ThreeColumnsProps } from "./ThreeColumns"
import Videos, { VideoProps } from "./Videos"

interface Components {
  Banner: React.FC<BannerProps>;
  CallToAction: React.FC<CTAProps>;
  Carousel: React.FC<CarouselProps>;
  CompareProducts: React.FC<CompareProductsProps>;
  DataTable: React.FC<DataTableProps>;
  FeatureLinks: React.FC<FeatureLinksProps>;
  Form: React.FC<FormProps>;
  Gallery: React.FC<GalleryProps>;
  Hero: React.FC<HeroProps>;
  Intro: React.FC<IntroProps>;
  LatestArticles: React.FC<LatestArticlesProps>;
  LinkBoxes: React.FC<LinkBoxesProps>;
  LinkPanels: React.FC<LinkPanelsProps>;
  List: React.FC<ListProps>;
  Logos: React.FC<LogosProps>;
  NavBlock: React.FC<NavBlockProps>;
  Selection: React.FC<SelectionProps>;
  SupportTiers: React.FC<SupportTiersProps>;
  Switch: React.FC<SwitchProps>;
  TextArea: React.FC<TextAreaProps>;
  TextBlock: React.FC<TextBlockProps>;
  TextImage: React.FC<TextImageProps>;
  ThreeColumns: React.FC<ThreeColumnsProps>;
  Videos: React.FC<VideoProps>;
}

interface Props {
  modules?: any;
  data?: {
    title?: string;
    uri?: string;
    slug?: string;
  }
}


const components: Components = {
  Banner,
  CallToAction,
  Carousel,
  CompareProducts,
  DataTable,
  FeatureLinks,
  Form,
  Gallery,
  Hero,
  Intro,
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

const FlexibleContent: React.FC<Props> = props => {
  const { modules, data } = props

  if (!!modules) {
    return modules
      .filter((module:any) => !!module)
      .map((module:any, index:any) => {
        const { fieldGroupName } = module;
        if (!fieldGroupName) {
          return null
        }

        const type:keyof Components = fieldGroupName.split("_").slice(-1)[0]

        const Component = components[type];

        return (
          Component && (
            <div key={index}>
              <Component {...module} {...data} />
            </div>
          )
        )
      })
  }
}

export default FlexibleContent
