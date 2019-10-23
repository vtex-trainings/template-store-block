
import React from 'react'
import { Query } from 'react-apollo'

import { useCssHandles } from 'vtex.css-handles'

import getGifTranslation from './queries/gifs.gql'

const CSS_HANDLES = ['gif'] as const 

const Gif: StorefrontFunctionComponent<GifProps> = ({query}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const variables = {
    query
  }

  return (
    <Query
    query={getGifTranslation}
    variables={variables}
    partialRefetch
    ssr={false}
    >
      {({data, loading}: any) => {
        if (loading)
          return null 

        const {
          gif : { 
            url
          }
        } = data

        return (
          <img 
            className={`${handles.gif} db center w-100`} 
            src={url}/>
        )
      }}
    </Query>
  )

}

interface GifProps {
  query: string
}
  
Gif.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    query: { 
      title: 'editor.countdown.title.title',
      type: 'string',
      default: null,
    }
  }
}
  
export default Gif
  