import { Heart, HeartPulse, Salad, Soup } from 'lucide-react'
import React from 'react'

const RecipieCard = () => {
    return (
        <div className='flex-col flex rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative'>
            <a href='#' className='relative h-32'>
                <img
                    src='/1.jpg'
                    alt='recipie image'
                    className='rounded-md w-full h-full object-cover cursor-pointer' />
                <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap text-sm'>
                    <Soup size={"16"} /> 4 Servings
                </div>
                <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
                    <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />
                </div>
            </a>
            <div className='flex mt-1'>
                <p className='font-bold tracking-wide'>Roasted Chicken</p>
            </div>
            <div>
                <p className='my-2'>Turkish Kitchen</p>
                <div className='flex gap-2 mt-auto'>
                    <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
                        <HeartPulse size={16} />
                        <span className='text-sm tracking-tighter font-semibold'>Gluten-Free</span>
                    </div>
                    <div className='flex gap-1 bg-[#d6f497] items-center p-1 rounded-md'>
                        <Salad size={16} />
                        <span className='text-sm tracking-tighter font-semibold'>Heart-Healthy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipieCard