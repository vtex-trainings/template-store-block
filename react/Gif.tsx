
import React, { useMemo } from 'react'
import { Query } from 'react-apollo'

import { useCssHandles } from 'vtex.css-handles'

import getGifTranslation from './queries/gifs.graphql'

const CSS_HANDLES = ['gif'] as const 

const Gif: StorefrontFunctionComponent<GifProps> = ({searchTerm = 'navidad'}) => {
  const handles = useCssHandles(CSS_HANDLES)
  const variables = useMemo(() => ({
    query: searchTerm
  }), [searchTerm])

  return (
    <Query
    query={getGifTranslation}
    variables={variables}
    partialRefetch
    ssr={false}
    >
      {({data, loading, error}: any) => {
        if (loading || error) {
          return null
        }

        return (
          <div className={`${handles.gif} tc`}>
            <img src={data.gif.url} />
          </div>
        )
      }}
    </Query>
  )

}

interface GifProps {
  searchTerm: string
}
  
Gif.schema = {
  title: 'admin/editor.countdown-gif.title',
  description: 'admin/editor.countdown-gif.description',
  type: 'object',
  properties: {
    searchTerm: {
      title: 'admin/editor.countdown.searchTerm.title',
      type: 'string',
      default: null,
    }
  }
}
  
export default Gif
  