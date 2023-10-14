import { useState } from 'react'
import Heart from '/src/assets/market/heart.svg'
import RedHeart from '/src/assets/market/red-heart.svg'
import { useNavigate } from 'react-router-dom'

const Card = ({name, image, price}) => {
    name = name || 'Manteau'
    image = image || ''
    price = price || '10$'

    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='w-1/5 h-full flex flex-col gap-4'>
            <div className='relative bg-[#F5F5F5]' onClick={() => navigate('/market-place/Manteau')}>
                <img src={image} alt="item" className='w-full' />
                <img src={isLiked ? RedHeart : Heart} alt="heart" onClick={() => setIsLiked(prev => !prev)} className='absolute top-4 right-2 p-2 bg-white rounded-full cursor-pointer' />
            </div>
            <p className='font-bold'>{name}</p>
            <p className='text-[#838383]'>{price}</p>
        </div>
    )
}

export default Card