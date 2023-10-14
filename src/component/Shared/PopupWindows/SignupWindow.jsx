import { useNavigate } from "react-router-dom"
import TextInput from "../../Form/TextInput"
import Cross from '/src/assets/cross.svg'

const SignupWindow = () => {
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
              title="Prenom"
              name="firstName"
              placeholder="Entrer votre prenom"
              type="text"
            />
            <TextInput
              title="Nom"
              name="lastName"
              placeholder="Entrer votre nom"
              type="text"
            />
            <TextInput
              title="Email"
              name="email"
              placeholder="Entrer votre email"
              type="text"
            />
            <TextInput
              title="Numero de telephone"
              name="phoneNumber"
              placeholder="Entrer votre numero de telephone"
              type="text"
            />
            <TextInput
              title="Mot de passe"
              name="password"
              placeholder="Entrer votre mot de passe"
              type="password"
            />

            {/* Checkboxes list of 'Collecteur', 'Benevole' and 'Depot'*/}
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="collecteur"
                    id="collecteur"
                    className="appearance-none border-[3px] border-[#E1CEB6] rounded-md w-9 h-9 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-white
                before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="collecteur">Collecteur</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="benevole"
                    id="benevole"
                    className="appearance-none border-[3px] border-[#E1CEB6] rounded-md w-9 h-9 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-white
                before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="benevole">Benevole</label>
              </div>

              <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    name="depot"
                    id="depot"
                    className="appearance-none border-[3px] border-[#E1CEB6] rounded-md w-9 h-9 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-white
                before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="depot">Depot</label>
              </div>
            </div>

            {/* Submit button */}
            <button className="w-full h-12 bg-[#E1CEB6] hover:bg-[#f0dbc2] active:bg-[#aa9c8a] rounded-lg text-black text-lg">
              S&apos;inscrire
            </button>
          </form>
        </div>
    )
}

export default SignupWindow