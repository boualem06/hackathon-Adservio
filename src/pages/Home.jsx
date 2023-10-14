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
    <>
      <Navbar />
      <div
        style={divStyle}
        className={`w-full h-screen bg-cover bg-opacity-30 flex justify-center items-center`}
      >
        hello here
      </div>
    </>
  )
}

export default Home
