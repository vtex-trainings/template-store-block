import React, { useState } from 'react'

import { parseTimeRemaining } from './utils/time'
import { TimeSplit } from './typings/global'

import { useCssHandles } from 'vtex.css-handles'

const ONE_SECOND_IN_MILLIS = 1000

const CSS_HANDLES = [
  'countdownText'
]

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate}) => {
  const [
    currentTime,
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
    <span className={`${handles.countdownText} db tc t-heading-2 fw3 w-100 c-muted-1`}>
      {currentTime.hours}:{currentTime.minutes}:{currentTime.seconds}
    </span>
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
  targetDate: string
}

//This is the schema form that will render the editable props on SiteEditor
Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    title: 'editor.countdown.targetDate.title',
    description: 'editor.countdown.targetDate.description',
    default: null,
    type: 'string'
  },
}

export default Countdown
