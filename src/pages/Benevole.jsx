import MapComponent from '../component/MapComponent'

const Benevole = () => {
  return (
    <div className='pt-20 w-full flex flex-col items-center justify-center'>
      <div className='flex mb-4 justify-between items-center '>
        <button className='text-white font-bold px-6  py-1 bg-[#E1CEB6] rounded-md mr-4'> Collecter</button>
        <button className='text-white font-bold px-6  py-1 bg-[#E1CEB6] rounded-md mr-4'> Point de depots</button>
        <button className='text-white font-bold px-6  py-1 bg-[#E1CEB6] rounded-md'> Messsages</button>

      </div>
      <MapComponent></MapComponent>
    </div>
  )
}

export default Benevole
