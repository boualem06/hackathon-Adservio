import React from 'react'

const Estimation = () => {
    return (
        <div>
            <p className='mb-4 font-bold'>Estimer le nombre d&apost;enfants:</p>

            <input type="text" name="chhildrenEstimation" placeholder="Montant" className='w-[40%] px-3 py-3 mb-8 border-[3px] rounded-lg border-[#E1CEB6]' />

            <p>Nombre denfants que vous pouvez sauvez</p>
        </div>
    )
}

export default Estimation