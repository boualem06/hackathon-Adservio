import bg from '../images/bg.png'
import Cross from '../assets/cross.svg'
import TextInput from '../component/Form/TextInput'
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
        className="w-full h-full bg-cover bg-opacity-30 flex justify-center items-center"
      >
        <div className="w-[40%] h-2/3 bg-white rounded-xl flex flex-col gap-6">
          <img src={Cross} alt="cross icon" className="self-end mr-2 mt-1" />
          <form action="" className="w-full h-full px-12 flex flex-col">
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
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="collecteur"
                  id="collecteur"
                  className="appearance-none border border-[#E4E4E7] w-6 h-5 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-[#EAEEF0]
              before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="collecteur">Collecteur</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="benevole"
                  id="benevole"
                  className="appearance-none border border-[#E4E4E7] w-6 h-5 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-[#EAEEF0]
              before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="benevole">Benevole</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="depot"
                  id="depot"
                  className="appearance-none border border-[#E4E4E7] w-6 h-5 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-[#EAEEF0]
              before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="depot">Depot</label>
              </div>
            </div>

            {/* Submit button */}
            <button className="w-full h-12 bg-[#E1CEB6] rounded-lg text-white font-bold text-lg">
              S&apos;inscrire
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
