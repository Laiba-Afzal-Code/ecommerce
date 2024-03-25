import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="home">
        <Navbar/>
        <Announcement/>
        <Slider/>
        <Categories/>
        <Link to={"/product"}>
        <Products/>
        </Link>
        <Newsletter/>
        <Footer/>
    </div>
      
    </>
  )
}

export default Home
