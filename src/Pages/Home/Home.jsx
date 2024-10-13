import React from 'react';
import logo from "../../assets/Image/logo.png"
import Section from '../../Components/Section/Section';
import HeroSection from './Hero/HeroSection';
import AboutUs from './AboutUS/AboutUs';
import Services from './Service/Service';
import CaseStudies from './CaseStudies/CaseStudies';
import Testimonials from './Testimonials/Testimonials';
import MeetOurTeam from './MeetOurTeam/MeetOurTeam';
import GetInTouch from './GetInTouch/GetInTouch';

const Home = () => {
    return (
        <div className=''>
            {/* This is Home page */}
            <HeroSection/>
            {/* <img className='rounded-md' src={logo} alt="" /> */}
            {/* <Section title='About US'/> */}
            <AboutUs/>
            {/* <Section title='What We Offer'/> */}
            {/* <Section title='What We Offer'/> */}
            <Services/>
            {/* <Section title='Case Studies'/> */}
            <CaseStudies/>

            <Testimonials/>
            <MeetOurTeam/>
            <GetInTouch/>
        </div>
    );
};

export default Home;