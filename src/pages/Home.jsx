import bg from '../images/bg.png'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const divStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  }

  return (
    <div className='h-screen overflow-y-hidden'>
      <Navbar />
      <div
        style={divStyle}
        className={`w-full h-full bg-cover bg-opacity-30 flex justify-center items-center`}
      >
        <div className='h-full flex flex-col justify-center items-center'>
          <p className='text-white text-center text-4xl font-bold leading-[194%]'>
            Ensemble, illuminons les vies des enfants de la lune. Chaque don compte pour un avenir plus lumineux.
          </p>
          <button className='rounded-xl bg-[#E1CEB6] py-4 px-8 w-fit font-bold text-white text-xl' onClick={() => navigate('/market-place')}>Check our marketplace</button>
        
        </div>
      </div>
    </div>
  )
}

export default Home
