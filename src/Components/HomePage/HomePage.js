import React from 'react';
import ContactUs from '../HomePage/SubSections/ContactUs';
import Footer from '../Includes/Footer';
import StatCounter from '../HomePage/SubSections/StatCounter';
import HeroSection from './SubSections/HeroSection';
import Projects from './SubSections/Projects';
import Services from './SubSections/Services';
import './HomePage.css';
import Cost from './SubSections/CostSection/Cost';
import Testimonial from './SubSections/Testimonial';
//Preloader
import Preloader from '../UI/Preloader';


const HomePage = () => {
        // const [loading, setLoading] = useState(true)
        // useEffect(() => {
        //     setLoading(true)
        //     setTimeout(() => {
        //         setLoading(false)
        //     }, 3000)
        // }, [])
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return (
        <div>
            <Preloader/>
            <HeroSection />
            <Services />
            <Cost/>
            <Projects/>
            <Testimonial />
            <StatCounter />
            <ContactUs />
            <Footer />
        </div>
    );
}
export default HomePage;