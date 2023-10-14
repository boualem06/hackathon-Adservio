import React from 'react'
import Fanta from '/src/assets/donations/fanta.jpeg'
import PlayIcon from '/src/assets/donations/play-icon.svg'

const Ads = () => {
  return (
    <div className='w-full flex flex-col'>
        <p className='mb-12'>Regardez des pubs  pour nous aider à collecter de l&apos;argent</p>

        <div className='relative w-[60%] self-center border border-black'>
            <img src={Fanta} alt="fanta background" className='z-10 w-full'/>
            {/* gray overlay */}
            <div className='absolute w-full h-full top-0 bg-black z-20 opacity-50'></div>
            <img src={PlayIcon} alt="play icon" className='absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' />
        </div>
    </div>
  )
}

export default Ads