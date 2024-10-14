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
            <HeroSection/>
            <AboutUs/>
            <Services/>
            <CaseStudies/>
            <Testimonials/>
            <MeetOurTeam/>
            <GetInTouch/>
        </div>
    );
};

export default Home;