import { useState, useEffect, type MutableRefObject } from 'react'
import useWebSocket from 'react-use-websocket'

import { getRadioURL } from '@utils/func'
import { RADIO_WS } from '@utils/const'
import { NowPlaying } from '@adapters/nowPlaying'
import { useEffectOnce } from 'react-use'
import { subscriptionSchema } from '@common/schemas'

type UseControlsParams = {
  audioElement: MutableRefObject<null | HTMLAudioElement>
  src: string
}

export const useControls = ({ audioElement, src }: UseControlsParams) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = async () => {
    if (audioElement && audioElement.current) {
      if (!isPlaying) {
        audioElement.current.src = getRadioURL(src)
        audioElement.current.load()
        try {
          await audioElement.current.play()
        } catch (e) {
          console.log(e)
          audioElement.current.pause()
        }
      } else {
        audioElement.current.pause()
        audioElement.current.src = ''
      }
      setIsPlaying((prev) => !prev)
    }
  }

  const handleVolume = (volume: number) => {
    if (audioElement && audioElement.current) {
      audioElement.current.volume = volume / 100
    }
  }

  return {
    isPlaying,
    handlePlayPause,
    handleVolume
  }
}

export const useNowPlaying = () => {
  const [nowPlaying, setNowPlaying] = useState<null | NowPlaying>(null)
  const { readyState, lastJsonMessage, sendMessage } = useWebSocket(RADIO_WS)

  useEffectOnce(() => sendMessage('{ "subs": { "station:radionautica": {} }}'))
  useEffect(() => {
    const data = subscriptionSchema.safeParse(lastJsonMessage)
    if (data.success) {
      setNowPlaying(new NowPlaying(data.data.pub.data.np))
    }
  }, [lastJsonMessage])

  return {
    nowPlaying,
    readyState
  }
}
