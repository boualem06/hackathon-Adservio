import Navbar from '../component/Navbar'
import ItemImage from '/src/assets/market/item1.png'

const Item1 = () => {
    return (
        <div className='h-screen overflow-y-hidden'>
            <Navbar/>
            <div className='h-full flex flex-col items-center pt-12 px-16'>
                <img src={ItemImage} alt="Manteau" className='w-[350px] h-[350px] aspect-square'/>
                <p className='font-bold'>Infos</p>
                <ul>
                    <li>Marque: Zara</li>
                    <li>Etat: Neuf</li>
                    <li>Taille: M</li>
                    <li>Couleur: Rouge</li>
                    <li>Prix: 1000 dz</li>
                </ul>
                <button className='bg-[#E1CEB6] px-4 py-2 text-white font-bold w-fit rounded-lg'>Donate</button>
            </div>
        </div>
    )
}

export default Item1