import React, { useState } from 'react'
import "./Home.css";
import Header from '../../Components/Header/Header';
import ExploreMenu from '../ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import Footer from '../../Components/Footer/Footer';
import AppDownload from '../../Components/AppDownload/AppDownload';
const Home = () => {

  const [category,setcategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
    
  )
}

export default Home
