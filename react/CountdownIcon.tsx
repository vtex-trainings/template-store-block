import React, { Fragment } from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['icon'] as const 

const CountdownIcon: StorefrontFunctionComponent<CountdownIconProps> = ({image}) => {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <Fragment>
      <div className={`${handles.icon} fw3 w-100 flex justify-center`}>
        <span>
            <img src={image}/>
        </span>
      </div>
    </Fragment>
  )
}

interface CountdownIconProps {
  showEvery: number,
  image: string
}

CountdownIcon.schema = {
  title: 'editor.countdownicon.title',
  type: 'object',
  properties: {
    image: {
        title: 'editor.countdownicon.image.title',
        type: 'string',
        default: null,
        widget: {
          'ui:widget': 'image-uploader',
        },
    }
  }
}

export default CountdownIcon
