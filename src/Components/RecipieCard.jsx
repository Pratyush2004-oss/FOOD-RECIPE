import { Heart, HeartPulse, Soup } from 'lucide-react'
import React, { useState } from 'react'

const getTwoValuesfromArray = (arr) => {
    return [arr[0], arr[1]];
}
const RecipieCard = ({ recipe, bg, badge }) => {
    const healthlabels = getTwoValuesfromArray(recipe.healthLabels);
    const [isFavorite, setFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));

    // Adding Recipes to Favorites
    const addRecipeToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);
        if (isRecipeAlreadyInFavorites) {
            favorites = favorites.filter((fav) => fav.label !== recipe.label);
            setFavorite(false);
        }
        else {
            favorites.push(recipe);
            setFavorite(true);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    return (
        <div className={`flex-col flex rounded-md ${bg} overflow-hidden p-3 relative`}>
            <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
                target='_blank'
                className='relative h-32'>
                <div className='skeleton absolute inset-0'>
                    <img
                        onLoad={(e) => {
                            e.currentTarget.style.opacity = 1;
                            e.currentTarget.previousElementSibling.style.display = "none";
                        }}
                        src={recipe.image}
                        alt='recipie image'
                        className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500' />
                </div>
                <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap text-sm'>
                    <Soup size={"16"} /> {recipe.yield} Servings
                </div>
            </a>
            <div
                onClick={(e) => {
                    e.preventDefault();
                    addRecipeToFavorites();
                }}
                className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
                {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
                {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
            </div>
            <div className='flex mt-1'>
                <p className='font-bold tracking-wide'>{recipe.label}</p>
            </div>
            <div>
                <p className='my-2'>{
                    recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen </p>
                <div className='flex gap-2 mt-auto'>
                    {healthlabels.map((label, idx) => (
                        <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
                            <HeartPulse size={16} />
                            <span className='text-sm tracking-tighter font-semibold'>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RecipieCard