import React from 'react'
import CIPLogo from '/src/assets/donations/cib.png'
import Dahabia from '/src/assets/donations/dahabia.svg'

const Electronic = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-12'>
            <div className="flex items-center gap-4">
                <input
                    type="radio"
                    name="electronic"
                    id="benevole"
                    className="appearance-none border-[3px] border-[#E1CEB6] rounded-md w-9 h-9 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-white
                before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="benevole">
                    <img src={CIPLogo} alt="ccp" className='inline-block w-16 mr-4 rounded-lg'/>
                    Payer avec la carte CIB
                </label>
            </div>

            <div className="flex items-center gap-4">
                <input
                    type="radio"
                    name="electronic"
                    id="benevole"
                    className="appearance-none border-[3px] border-[#E1CEB6] rounded-md w-9 h-9 grid place-content-center before:bg-[url('/src/assets/check-icon.svg')] before:bg-contain before:bg-no-repeat bg-white
                before:w-[1em]  before:h-[1em] before:scale-0 checked:before:scale-100 "
                />
                <label htmlFor="benevole">
                    <img src={Dahabia} alt="ccp" className='inline-block w-16 mr-4'/>
                    Payer avec la carte eddahabia
                </label>
            </div>

            <button className="w-fit h-12 px-4 bg-[#5FB9FA] rounded-lg text-white font-bold text-lg">
              Soumettere
            </button>
        </form>
    )
}

export default Electronic