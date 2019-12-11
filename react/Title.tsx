import React from 'react'

import { IOMessage } from 'vtex.native-types'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['title'] as const 

const Title: StorefrontFunctionComponent<TitleProps> = ({title}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.title} t-heading-2 fw3 w-100 pt7 pb6 c-muted-1 db tc`}>
      <IOMessage id={title} />
    </div> 
  )
}

interface TitleProps {
  title?: string
}
  
Title.schema = {
  "title": "admin/editor.countdown-title.title",
  "description": "admin/editor.countdown-title.description",
}
  
export default Title
  