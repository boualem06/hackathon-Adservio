import bg from '../images/bg.png'
import Navbar from '../component/Navbar'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import LoginWindow from '../component/Shared/PopupWindows/LoginWindow';

const Login = () => {
  const navigate = useNavigate()

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
        <Popup
          modal
          open={true}
          closeOnDocumentClick={false}
          nested
        > 
          <LoginWindow/>
          
        </Popup>
      </div>
    </>
  )
}

export default Login
