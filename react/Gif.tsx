
import React from 'react'
import { Query } from 'react-apollo'

import { useCssHandles } from 'vtex.css-handles'

import getGifTranslation from './queries/gifs.gql'

const CSS_HANDLES = ['gif'] as const 

const Gif: StorefrontFunctionComponent<GifProps> = ({searchTerm}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const variables = {
    query: searchTerm
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
            className={`${handles.gif} db center w-30`} 
            src={url}/>
        )
      }}
    </Query>
  )

}

interface GifProps {
  searchTerm: string
}
  
Gif.schema = {
  title: 'editor.countdown-gif.title',
  description: 'editor.countdown-gif.description',
  type: 'object',
  properties: {
    searchTerm: { 
      title: 'editor.countdown.searchTerm.title',
      type: 'string',
      default: null,
    }
  }
}
  
export default Gif
  