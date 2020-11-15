import React, {useState} from 'react'
import CatalogPreview from '../containers/CatalogPreview/CatalogPreview'
import Hero from '../containers/HeroSection/Hero'
import WhyUs from '../containers/WhyUsSection/WhyUs'

const Home = () => {

    return (
        <>
            <Hero/>
            <CatalogPreview/>
            <WhyUs/>
        </>
    )
}

export default Home
