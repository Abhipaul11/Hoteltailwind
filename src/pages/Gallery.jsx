import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Gallery() {


    return (
        <>

            {/* <div classNameName={styles.imagecontainer}>
                <img src="/jhandi/jpic1.jpg" alt="" />
                <img src="/jhandi/jpic2.jpg" alt="" />
                <img src="/jhandi/jpic3.jpg" alt="" />
                <img src="/jhandi/jpic4.jpg" alt="" />


                <img src="/ramdhura/t5.jpg" alt="" />
                <img src="/ramdhura/t1.jpg" alt="" />
                <img src="/ramdhura/t2.jpg" alt="" />


            </div> */}



            <div style={{ padding: "5px" }}>


                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic3.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic4.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/ramdhura/t1.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/ramdhura/t2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-60 object-cover rounded-lg" src="/ramdhura/t5.jpg" alt="" />
                    </div>
                </div>


            </div>


        </>
    );
}



export default Gallery;
