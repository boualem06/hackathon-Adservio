import bg from '../images/bg.png'
import Navbar from '../component/Navbar'
import Popup from 'reactjs-popup'
import SignupWindow from '../component/Shared/PopupWindows/SignupWindow';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.open()
  }, [])

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
          ref={modalRef}
          modal
          open={true}
          closeOnDocumentClick={false}
          keepTooltipInside
          onClose={() => navigate('/')}
        > 
          <SignupWindow/>
        </Popup>
      </div>
    </>
  )
}

export default Signup
