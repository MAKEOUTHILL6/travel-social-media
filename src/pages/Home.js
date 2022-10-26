import { ServicesSection } from "../components/ServicesSection/ServicesSection";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { AboutSection } from "../components/AboutSection/AboutSection";
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Navigation } from '../components/Navigation/Navigation';


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navigation toggle={toggle} />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
        </>
    )
};