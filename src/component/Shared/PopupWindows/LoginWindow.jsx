import { useNavigate } from "react-router-dom";
import TextInput from "../../Form/TextInput"
import Cross from '/src/assets/cross.svg'

const LoginWindow = () => {
    const navigate = useNavigate();
    
    const closeHandler = () => {
        navigate('/')
    }

    const handleSignup = (e) => {
        e.preventDefault()
        console.log('signup')
    } 
    
    return (
        <div className="w-[40vw] h-2/3 min-h-fit bg-white rounded-xl flex flex-col gap-6 pt-1">
          <img src={Cross} alt="cross icon" onClick={closeHandler} className="self-end mr-2 mt- cursor-pointer" />
          <form onSubmit={handleSignup} className="w-full h-full min-h-fit px-12 pb-12 flex flex-col">
            <TextInput
              title="Email"
              name="email"
              placeholder="Entrer votre email"
              type="text"
            />

            <TextInput
              title="Mot de passe"
              name="password"
              placeholder="Entrer votre mot de passe"
              type="password"
            />

            {/* Submit button */}
            <button className="w-full h-12 bg-[#E1CEB6] hover:bg-[#f0dbc2] active:bg-[#aa9c8a] rounded-lg text-black text-lg">
              S&apos;inscrire
            </button>
          </form>
        </div>
    )
}

export default LoginWindow