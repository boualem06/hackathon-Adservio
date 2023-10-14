import bg from '../images/bg.png'
import Navbar from '../component/Navbar'

const Home = () => {
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
        hello here
      </div>
    </div>
  )
}

export default Home
