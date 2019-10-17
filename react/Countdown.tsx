import React, { useState, Fragment } from 'react'
import { FormattedMessage } from 'react-intl'

import { parseTimeRemaining } from './utils/time'
import { TimeSplit } from './typings/global'
import { useCssHandles } from 'vtex.css-handles'

const ONE_SECOND_IN_MILLIS = 1000
const CSS_HANDLES = ['container', 'title'] as const 

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({title, targetDate}) => {
  const [
    timeRemaining, 
    setTime
  ] = useState<TimeSplit>({
    hours: '00', 
    minutes: '00', 
    seconds: '00'
  })
  
  const titleText = title || <FormattedMessage id="countdown.title" /> 
  const handles = useCssHandles(CSS_HANDLES)

  tick(targetDate, setTime)

  return (
    <Fragment>
      <div className={`${handles.container} t-heading-2 fw3 w-100 pt7 pb6 c-muted-1`}>
        <div className={`${handles.title} db tc`}>
          {titleText}
        </div>
        <div className={`db tc`}>
          {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
        </div>
      </div>
    </Fragment>
  )
}

const tick = (targetDate: string, dispatchFn: React.Dispatch<React.SetStateAction<TimeSplit>>) => { 
  let finalDate = new Date(targetDate)
  let now = new Date()

  let secondsLeft = (finalDate.getTime() - now.getTime())/ONE_SECOND_IN_MILLIS

  setTimeout(()=> {
    dispatchFn(parseTimeRemaining(secondsLeft))
  }, ONE_SECOND_IN_MILLIS)
}

interface CountdownProps {
  targetDate: string,
  title: string
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: { 
      title: 'editor.countdown.title.title',
      type: 'string',
      default: null,
    },
    targetDate: {
      title: 'editor.countdown.targetDate.title',
      description: 'editor.countdown.targetDate.description',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
