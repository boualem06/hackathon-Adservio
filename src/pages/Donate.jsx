import { useState } from 'react'
import Electronic from '../component/Donation/Electronic';
import CCPInfos from '../component/Donation/CCPInfos';
import Ads from '../component/Donation/Ads';
import Zakat from '../component/Donation/Zakat';
import Estimation from '../component/Donation/Estimation';
import Material from '../component/Donation/Material';

const Donate = () => {
    const [donationType, setDonationType] = useState('electronic');

    return (
        <div className='w-4/5 pt-8 pl-8 pb-4'>
            <h1 className="text-3xl font-bold">Donate </h1>

            <p className='mt-4'>Aider nous à faire la différence. Faites un don aujourd&apos;hui ! </p>

            <p className='mt-4'>Choisissez la maniére de faire un don</p>

            <div>
                {/* select menu to choose the type of donation, with option state handle */}
                <select className="bg-white p-3 mt-8 mb-12 border-[3px] rounded-xl border-[#E1CEB6]" onChange={(e) => setDonationType(e.target.value)}>
                    <option value="electronic">Paiment Electronique</option>
                    <option value="infos">Informations Bancaires</option>
                    <option value="ads">Espace Pub</option>
                    <option value="zakat">ZAKAT FITR</option>
                    <option value="material">Materiel</option>
                    <option value="estimation">Estimation</option>
                </select>
                {
                    (() => {
                        switch(donationType){
                            case 'electronic': return <Electronic/>
                            case 'infos': return <CCPInfos/>
                            case 'ads' : return <Ads/>
                            case 'zakat': return <Zakat/>
                            case 'material': return <Material/>
                            case 'estimation': return <Estimation/>
                        }
                    })()
                }
            </div>
            
        </div>
    )
}

export default Donate