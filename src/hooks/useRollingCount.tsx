import { useEffect, useState } from 'react'

import { easeOutExpo } from '@/libs/easeFunction'

interface Prop {
  to: number
  duration: number
}

const useRollingCount = (props: Prop) => {
  const { to, duration } = props
  const [count, setCount] = useState(0)
  const framesPerSecond = 60
  const totalFrames = duration * framesPerSecond

  useEffect(() => {
    const interval = 1000 / framesPerSecond
    let frameCount = 1

    const timer = setInterval(() => {
      const ratio = easeOutExpo(frameCount / totalFrames)
      const increaseCount = Math.round(to * ratio)
      setCount(increaseCount)
      frameCount++

      if (increaseCount === to) {
        clearInterval(timer)
      }
    }, interval)
  }, [to, totalFrames, framesPerSecond])

  return count
}

export default useRollingCount
