import React, { useCallback, useRef, useState } from 'react'
import {
  FaPlayCircle,
  FaChevronDown,
  FaPauseCircle,
  FaChevronUp,
  FaMicrophone,
  FaMusic
} from 'react-icons/fa'
import { ReadyState } from 'react-use-websocket'
import { SyncLoader } from 'react-spinners'

import { useControls, useNowPlaying } from '@hooks/useRadio'
import { RADIO_URL } from '@utils/const'
import { cx } from 'classix'

export const Player = () => {
  const audioRef = useRef<null | HTMLAudioElement>(null)
  const { handleVolume, handlePlayPause, isPlaying } = useControls({
    audioElement: audioRef,
    src: RADIO_URL
  })
  const [playerVisible, setPlayerVisible] = useState(true)
  const togglePlayerVisible = useCallback(
    () => setPlayerVisible((prev) => !prev),
    []
  )
  const { nowPlaying, readyState } = useNowPlaying()

  return (
    <div
      className={cx(
        'navbar fixed bottom-0 bg-bg-alt px-4 font-accent font-bold transition-transform',
        'flex-col content-center justify-center sm:flex-row sm:items-center',
        !playerVisible && 'translate-y-28 sm:translate-y-16'
      )}
    >
      <div className='navbar-start'>
        <div className='flex items-center gap-2'>
          <button
            className='btn-primary btn-ghost btn-circle btn text-primary'
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <FaPauseCircle size={28} />
            ) : (
              <FaPlayCircle size={28} />
            )}
          </button>
          <audio ref={audioRef} />
          <input
            type='range'
            className='range range-primary range-xs md:max-w-[6rem]'
            min={0}
            max={100}
            onChange={(e) => handleVolume(Number(e.target.value))}
          />
        </div>
      </div>
      <div className='navbar-center'>
        {readyState === ReadyState.OPEN && nowPlaying ? (
          <div className='flex flex-row items-center gap-2 text-base sm:text-base'>
            <FaMusic className='sm:text-lg' />
            {nowPlaying.song.text}
          </div>
        ) : (
          <SyncLoader color='#FFFFFF' />
        )}
      </div>
      <div className='navbar-end w-full pr-2 sm:w-[50%]'>
        {nowPlaying && (
          <div className='flex w-full flex-row content-center items-center justify-center gap-2 text-sm sm:w-max sm:text-base'>
            <FaMicrophone className='sm:text-lg' />
            {nowPlaying.streamer || 'AutoDJ'}
          </div>
        )}
        <button
          className={cx(
            'swap btn-primary btn-ghost swap-rotate btn-circle btn absolute right-2 -top-14 text-primary transition-transform',
            playerVisible && 'swap-active'
          )}
          onClick={togglePlayerVisible}
        >
          <FaChevronDown className='swap-on fill-current' size={24} />
          <FaChevronUp className='swap-off fill-current' size={24} />
        </button>
      </div>
    </div>
  )
}
