import React, { useState, Fragment } from 'react'

import { parseTimeRemaining } from './utils/time'
import { TimeSplit } from './typings/global'

const ONE_SECOND_IN_MILLIS = 1000

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({}) => {
  const [
    ,
    setTime
  ] = useState<TimeSplit>({
    hours: '00', 
    minutes: '00', 
    seconds: '00'
  })

  //This will update the state of the component every second
  tick('', setTime)

  return (
    <Fragment>
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
}

//This is the schema form that will render the editable props on SiteEditor
Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
  },
}

export default Countdown
