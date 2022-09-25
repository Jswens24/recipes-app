import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../RecipeCard';
import AdBanner from './AdBanner'

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const url = 'https://recipes.devmountain.com'

  const getRecipes = () => {
    axios
      .get(`${url}/recipes`)
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
      })
  };

  useEffect(() => {
    getRecipes();
  }, [])

  return (
    <div>
      <AdBanner />
      <RecipeCard />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen