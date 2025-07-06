import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Lastcardlayout() {


    useEffect(() => {
        AOS.init({ duration: 400 }); // Initialize AOS with animation duration
    }, []);
    return (
        <>

        </>
    )
}

export default Lastcardlayout

