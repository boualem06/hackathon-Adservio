import { useState } from 'react'
import MapComponent from '../component/MapComponent'
import chat from '../images/Group 20.png'

const Benevole = () => {
  const [tuched, setTuched] = useState('two')
  const [data,setData]=useState([
    {
      geocode: [36.788834, 3.267386],
      popUp: 'Hello, I am pop up 1'
    },
    
    {
        geocode: [36.728768, 3.205125],
        popUp: 'Hello, I am pop up 1'
      },

      {
        geocode: [36.711717, 3.13054],
        popUp: 'Hello, I am pop up 1'
      },

      
      {
        geocode: [36.731055, 3.033905],
        popUp: 'Hello, I am pop up 1'
      },

      {
        geocode: [36.638269, 2.856848],
        popUp: 'Hello, I am pop up 1'
      },

      {
        geocode: [36.602456, 2.73427],
        popUp: 'Hello, I am pop up 1'
      },



      {
        geocode: [36.552039 ,2.581858],
        popUp: 'Hello, I am pop up 1'
      },



  ])
  return (
    <div className='pt-20 w-full flex flex-col items-center justify-center'>
      <div className='flex mb-4 justify-between items-center '>
        <button
          className={`  px-6  py-1 ${
            tuched == 'one'
              ? 'font-bold bg-[#E1CEB6] text-white'
              : 'text-black border border-[#E1CEB6]'
          } rounded-lg mr-4`}
          onClick={() => {
            setTuched('one')
          }}
        >
          {' '}
          Collecter
        </button>
        <button
          className={`  px-6  py-1 ${
            tuched == 'two'
              ? 'font-bold bg-[#E1CEB6] text-white'
              : 'text-black border border-[#E1CEB6]'
          } rounded-lg mr-4`}
          onClick={() => {
            setTuched('two')
          }}
        >
          {' '}
          Point de depots
        </button>
        <button
          className={`  px-6  py-1 ${
            tuched == 'three'
              ? 'font-bold bg-[#E1CEB6] text-white'
              : 'text-black border border-[#E1CEB6]'
          } rounded-lg mr-4`}
          onClick={() => {
            setTuched('three')
          }}
        >
          {' '}
          Messsages
        </button>
      </div>
         
      {(tuched == 'one' || tuched == 'two') && <button className="px-6  py-1 ont-bold bg-[#E1CEB6] text-white rounded-lg mb-4 hover:shadow-md hover:shadow-black" onClick={()=>{setData(data.slice(0,-3))}} >filtrer les plus proche </button>}  
      {(tuched == 'one' || tuched == 'two') && <MapComponent data={data}></MapComponent>}
      {tuched == 'three' && (
        <div>
          <img src={chat}></img>
        </div>
      )}
    </div>
  )
}

export default Benevole
