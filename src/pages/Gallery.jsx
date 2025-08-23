// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';


// function Gallery() {


//     return (
//         <>

//             {/* <div classNameName={styles.imagecontainer}>
//                 <img src="/jhandi/jpic1.jpg" alt="" />
//                 <img src="/jhandi/jpic2.jpg" alt="" />
//                 <img src="/jhandi/jpic3.jpg" alt="" />
//                 <img src="/jhandi/jpic4.jpg" alt="" />


//                 <img src="/ramdhura/t5.jpg" alt="" />
//                 <img src="/ramdhura/t1.jpg" alt="" />
//                 <img src="/ramdhura/t2.jpg" alt="" />


//             </div> */}



//             <div style={{ padding: "5px" }}>


//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic1.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic2.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic3.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/jhandi/jpic4.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/ramdhura/t1.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/ramdhura/t2.jpg" alt="" />
//                     </div>
//                     <div>
//                         <img className="w-full h-60 object-cover rounded-lg" src="/ramdhura/t5.jpg" alt="" />
//                     </div>
//                 </div>


//             </div>


//         </>
//     );
// }



// export default Gallery;




import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Gallery() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            infinite: true,
            Thumbs: true,
            Toolbar: {
                display: [
                    "zoom",
                    "close",
                    "slideShow",
                    "fullScreen",
                    "thumbs",
                ],
            },
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    const images = [
        "/jhandi/jpic1.jpg",
        "/jhandi/jpic2.jpg",
        "/jhandi/jpic3.jpg",
        "/jhandi/jpic4.jpg",
        "/ramdhura/t1.jpg",
        "/ramdhura/t2.jpg",
        "/ramdhura/t5.jpg",
    ];

    return (
        <>

            <div className="max-w-[1350px] mx-auto px-3 py-10">
                <h2 className="text-2xl font-bold text-center text-red-900 mb-6">
                    Our Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {images.map((src, index) => (
                        <a
                            key={index}
                            href={src}
                            data-fancybox="gallery"
                            data-caption={`Image ${index + 1}`}
                            className="block"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-60 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                            />
                        </a>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Gallery;
