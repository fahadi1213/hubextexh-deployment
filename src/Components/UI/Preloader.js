import React,{useState,useEffect} from 'react'
import "./Preloader.css";
import Logo from '../../Assets/Images/logo.png'

const Preloader = () =>{
        
    const [loading, setLoading] = useState("preLoader-section")
    const [display, setDisplay] = useState("")

        useEffect(() => {
            document.body.style.overflowY = "hidden"
            setTimeout(() => {
                setLoading("disap_anim zero")
                setDisplay("d-none")
                document.body.style.overflowY = "scroll"
            }, 3000)
        }, [])
    return(
        <>
            <section className={`preLoader-section ${loading}`}>
                <div className={`loader-main d-flex align-items-center justify-content-center ${loading}`}>
                <div className={`border-end border-5 border-dark pe-3 me-3 loader-sub ${display}`}><img src={Logo} className="preLoader-logo_img" alt="loader-logo"/></div>
                <div className={`loader ${display}`}>
                    <span>Dream</span>
                    <span>Estimate</span>
                    <span>Design</span>
                    <span>Develop</span>
                    <span>Marketing</span>
                    <span>Maintainance</span>
                </div>
                </div>
            </section>
        </>

    );
}
export default Preloader