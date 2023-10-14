import React from 'react'
import RectangleBg from '../../assets/rectangle-border.svg'

const TextInput = ({title, name, placeholder, type}) => {
    return (
        <div className='relative w-full h-20'>
            {/* <img src={RectangleBg} alt="rectangle background" className='absolute top-0' /> */}
            <p className='absolute -top-3 left-4 bg-white pl-2 pr-6 text-[#06152B] text-lg font-medium'>{title}</p>
            <input type={type} name={name} placeholder={placeholder} className='w-full px-3 py-3 border-[3px] rounded-lg border-[#E1CEB6]' />
        </div>
    )
}

export default TextInput