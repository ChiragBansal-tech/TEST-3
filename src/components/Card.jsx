import React from 'react'
import Button from './Button';

const CardComp = ({ name, price, image, description }) => {
    return (
        <div className='p-4 text-white flex flex-col justify-center items-center '>
            <img
                src={image}
                alt={name}
                className=''
            />
            <h2 className='text-xl font-semi-bold mb-2 font-custom'>{name}</h2>
            <p className='text-gray-400 mb-2'>${price}</p>
            <p className='text-sm text-gray-500 mb-4'>{description}</p>
            <div className='flex gap-5 justify-between'>
                <Button
                    label='Buy Now'
                    className='py-2 px-4 border-2 border-black rounded-md bg-green2 hover:border-white'
                />
                <Button
                    label='Add to Cart'
                    className='py-2 px-4 border-2 border-black rounded-md bg-red1 hover:border-white'
                />
            </div>
        </div>
    )
}

export default CardComp;