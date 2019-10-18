import React, { useState, Fragment } from 'react'

import { parseTimeRemaining } from './utils/time'
import { TimeSplit } from './typings/global'
import { useCssHandles } from 'vtex.css-handles'

const ONE_SECOND_IN_MILLIS = 1000
const CSS_HANDLES = ['container'] as const

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate}) => {
  const [
    timeRemaining,
    setTime
  ] = useState<TimeSplit>({
    hours: '00', 
    minutes: '00', 
    seconds: '00'
  })

  const handles = useCssHandles(CSS_HANDLES)

  //This will update the state of the component every second
  tick(targetDate, setTime)

  return (
    <Fragment>
      <div className={`${handles.container} t-heading-2 fw3 w-100 pt7 pb6 c-muted-1`}>
        <span className={`db tc`}>
          {`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}
        </span>
      </div>
    </Fragment>
  )
}

/**
 * 
 * @param targetDate ISOString for the date that the countdown will expire
 * @param dispatchFn A function that updates the state of the component
 */
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
}

//This is the schema form that will render the editable props on SiteEditor
Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetDate: {
      title: 'editor.countdown.targetDate.title',
      description: 'editor.countdown.targetDate.description',
      type: 'string',
      default: null,
    },
  },
}

export default Countdown
