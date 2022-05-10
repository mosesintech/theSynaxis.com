import React from "react"
import { graphql } from "gatsby"

import { FlexibleContentProps } from "../../interfaces"
import Edges from "../Layout/Edges"

interface Video {
  videoTitle: string
  videoText: string
  videoEmbedLink: string
  downloadableItems: []
}

export interface VideoProps extends FlexibleContentProps {
  videosTitle?: string
  videosText?: string
  videosBackgroundColor?: string
  videosButton?: {
    target?: string
    title?: string
    url?: string
  }
  videos: []
}

const Videos: React.FC<VideoProps> = props => {
  const { videos } = props
  return (
    <>
      <Edges size="lg">
        <div className="flex justify-around flex-wrap">
          {videos &&
            videos.map((vid: Video) => {
              return (
                <div className="bg-gray-50 shadow overflow-hidden sm:rounded-lg w-[47%] mt-5">
                  <div className="px-4 py-5 sm:px-6 bg-gray-50">
                    {vid?.videoTitle && (
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        children={vid.videoTitle}
                      />
                    )}

                    {vid?.videoText && (
                      <p
                        className="mt-1 max-w-2xl text-sm text-gray-500"
                        children={vid.videoText}
                      />
                    )}
                  </div>
                  <div className="border-t border-gray-200 bg-gray-50">
                    <dl>
                      {vid?.videoEmbedLink && (
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <iframe
                              width="500"
                              height="315"
                              src={`${vid.videoEmbedLink}`}
                              title="video"
                            ></iframe>
                          </dt>
                        </div>
                      )}
                      {vid?.downloadableItems && (
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                              {vid?.downloadableItems &&
                                vid.downloadableItems.map(
                                  (item: {
                                    downloadableItemTitle: string
                                    downloadableItemLink: string
                                  }) => {
                                    return (
                                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                        {item.downloadableItemTitle && (
                                          <div className="w-0 flex-1 flex items-center">
                                            <span
                                              className="ml-2 flex-1 w-0 truncate"
                                              children={
                                                item.downloadableItemTitle
                                              }
                                            />
                                          </div>
                                        )}

                                        {item.downloadableItemLink && (
                                          <div className="ml-4 flex-shrink-0">
                                            <a
                                              href={
                                                item.downloadableItemLink.url
                                              }
                                              className="font-medium text-indigo-600 hover:text-indigo-500"
                                              children={
                                                item.downloadableItemLink.title
                                              }
                                            />
                                          </div>
                                        )}
                                      </li>
                                    )
                                  }
                                )}
                            </ul>
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </div>
              )
            })}
        </div>
      </Edges>
    </>
  )
}

export default Videos

export const fragment = graphql`
  fragment Videos on WpDefaultTemplate_Flexiblecontentmodules_ContentModule {
    ... on WpDefaultTemplate_Flexiblecontentmodules_ContentModule_Videos {
      fieldGroupName
      videosTitle
      videosText
      videosBackgroundColor
      videosButton {
        target
        title
        url
      }
      videos {
        videoTitle
        videoText
        videoEmbedLink
        downloadableItems {
          downloadableItemTitle
          downloadableItemLink {
            target
            title
            url
          }
        }
      }
    }
  }

  fragment contactVideos on WpTemplate_Contact_Flexiblecontentmodules_ContentModule {
    ... on WpTemplate_Contact_Flexiblecontentmodules_ContentModule_Videos {
      fieldGroupName
      videosTitle
      videosText
      videosBackgroundColor
      videosButton {
        target
        title
        url
      }
      videos {
        videoTitle
        videoText
        videoEmbedLink
        downloadableItems {
          downloadableItemTitle
          downloadableItemLink {
            target
            title
            url
          }
        }
      }
    }
  }
`
