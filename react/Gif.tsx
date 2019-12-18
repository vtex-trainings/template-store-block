
import React from 'react'
import { useQuery } from 'react-apollo'

import getGifTranslation from './queries/gifs.graphql'

const Gif: StorefrontFunctionComponent<GifProps> = ({searchTerm = 'navidad'}) => {
  const { data, loading } = useQuery(getGifTranslation, {
    variables: {
      query: searchTerm
    },
    ssr: false
  })

  return (
    <div className="tc">
      {!loading &&
        <img src={data.gif.url} />
      }
    </div>
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
  