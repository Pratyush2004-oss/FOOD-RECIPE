import React from 'react'
import RecipieCard from '../Components/RecipieCard';
import { getRandomColor } from '../Lib/utils';


const FavoritesPage = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return (
    <div className='bg-[#faf9fb] flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'> My Favorites</p>

        {/* if there is nothing in the favorites List */}
        {favorites.length === 0 && (
          <div className='h-[80vh] flex flex-col items-center gap-4'>
            <img src='404.svg' alt='404 svg' className='h-3/4 ' />
          </div>
        )}

        {/* if there are some recipes in the favorites List */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {favorites.map((recipe, index) => (
            <RecipieCard
              key={index}
              recipe={recipe}
              {...getRandomColor()}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FavoritesPage