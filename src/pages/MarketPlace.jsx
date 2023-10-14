import React from 'react'
import Navbar from '../component/Navbar'
import LeftArrow from '/src/assets/market/left-arrow.svg'
import RightArrow from '/src/assets/market/right-arrow.svg'
import Card from '../component/MarketPlace/Card'

// Assets
import Item1 from '/src/assets/market/item1.png'
import Item2 from '/src/assets/market/item2.png'
import Item3 from '/src/assets/market/item3.png'
import Item4 from '/src/assets/market/item4.png'

const MarketPlace = () => {
  return (
    <div className='h-screen overflow-y-hidden'>
      <Navbar/>
      <div className='flex flex-col gap-8 pt-12 px-16'>

        {/* Control Panel */}
        <div className='flex justify-between'>

          {/* Arrows */}
          <div className='w-24 flex justify-between'>
            <img src={LeftArrow} alt="left arrow" className='p-2 bg-[#F5F5F5] rounded-full' />
            <img src={RightArrow} alt="right arrow" className='p-2 bg-[#F5F5F5] rounded-full'/>
          </div>

          {/* Search Button */}
          <p className='p-2 bg-[#E1CEB6] text-white font-bold rounded-md'>Consulter tous les produits</p>
        </div>

        {/* Cards Conainer */}
        <div className='flex flex-wrap gap-[6%] justify-start'>
          {/* First Row */}
          <Card name="Manteau" price="1000 dz" image={Item1}/>
          <Card name="Sac" price="1000 dz" image={Item2}/>
          <Card name="RGB liquid CPU Cooler" price="3000 dz" image={Item3}/>
          <Card name="Bibliothèque" price="4000 dz" image={Item4}/>

          {/* Second Row */}
          <Card name="Manteau" price="1000 dz" image={Item1}/>
          <Card name="Sac" price="1000 dz" image={Item2}/>
          <Card name="RGB liquid CPU Cooler" price="3000 dz" image={Item3}/>
          <Card name="Bibliothèque" price="4000 dz" image={Item4}/>
        </div>
      </div>
    </div>
  )
}

export default MarketPlace