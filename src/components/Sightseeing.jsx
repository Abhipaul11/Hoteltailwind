// import React, { useState } from 'react';
// import styles from './componentcss/Sightseeing.module.css';

// function Sightseeing() {
//     const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

//     const openImage = (image) => {
//         setSelectedImage(image);
//     };

//     const closeImage = () => {
//         setSelectedImage(null);
//     };

//     return (
//         <>
//             <section className=" max-w-[1350px] mx-auto px-2">

//                 <div className="mt-12 px-2">
//                     <h3 className="text-xl font-bold text-red-900 mb-2">Sightseeing in Nearby Attractions</h3>
//                     <p className="text-gray-600 text-base">
//                         Explore the breathtaking beauty around you. Whether you're into photography, relaxation, or adventure,
//                         these scenic destinations offer something for everyone. From lush green valleys to misty hilltops,
//                         your journey will be filled with unforgettable memories.
//                     </p>
//                 </div>

//                 <div className={styles.cardcontainer}>
//                     <Sightseeingcard text="Lava Mountain Town" image='/images/lava.jpg' />
//                     <Sightseeingcard text="Rishop hill view" image='/images/rishop.jpg' />
//                     <Sightseeingcard text="Deolo Scenic Hilltop Park" image='/images/deolopark.jpg' />

//                 </div>

//                 <div className={styles.cardcontainer}>
//                     <Sightseeingcard text="Paragliding at deolo-park" image='/images/paragliding.jpg' />
//                     <Sightseeingcard text="Kolakham Waterfalls" image='/images/kolakham.jpg' />
//                     <Sightseeingcard text="Neora Valley's beauty" image='/images/neoravalley.jpg' />
//                 </div>

//                 <div className={styles.cardcontainer}>
//                     <Sightseeingcard text="Photography at Ambiok Tea Garden" image='/images/ambiok.jpg' />
//                     <Sightseeingcard text="Suntaly sunrise view-point" image='/images/sunrise.jpg' />
//                     <Sightseeingcard text="Views" image='/images/pic7.jpg' />
//                 </div>

//             </section >


//         </>
//     );
// }

// function Sightseeingcard({ image, text }) {
//     return (
//         <div className={styles.card}  >
//             <img src={image} alt={text} className={styles.cardImage} />
//             <p className={styles.cardText}>{text}</p>
//         </div>
//     );
// }

// export default Sightseeing;




import React, { useEffect } from "react";
import styles from "./componentcss/Sightseeing.module.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Sightseeing() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            infinite: true, // loop gallery
            Thumbs: true,   // thumbnails navigation
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
            Fancybox.destroy(); // cleanup
        };
    }, []);

    return (
        <>
            <section className="max-w-[1350px] mx-auto px-2">
                <div className="mt-12 px-4 mb-4 ">
                    <h3 className="text-2xl  font-extrabold text-red-900 mb-2 tracking-wide">
                        Sightseeing in Nearby Attractions
                    </h3>
                    <p className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed">
                        🌿 Explore the breathtaking beauty around you — whether you're into{" "}
                        <span className="font-semibold text-red-700">photography</span>,{" "}
                        <span className="font-semibold text-red-700">relaxation</span>, or{" "}
                        <span className="font-semibold text-red-700">adventure</span>. From lush
                        green valleys to misty hilltops, every moment will become an
                        <span className="italic"> unforgettable memory</span>.
                    </p>
                </div>


                <div className={styles.cardcontainer}>
                    <Sightseeingcard
                        text="Lava Mountain Town"
                        image="/images/lava.jpg"
                    />
                    <Sightseeingcard
                        text="Rishop hill view"
                        image="/images/rishop.jpg"
                    />
                    <Sightseeingcard
                        text="Deolo Scenic Hilltop Park"
                        image="/images/deolopark.jpg"
                    />
                </div>

                <div className={styles.cardcontainer}>
                    <Sightseeingcard
                        text="Paragliding at deolo-park"
                        image="/images/paragliding.jpg"
                    />
                    <Sightseeingcard
                        text="Kolakham Waterfalls"
                        image="/images/kolakham.jpg"
                    />
                    <Sightseeingcard
                        text="Neora Valley's beauty"
                        image="/images/neoravalley.jpg"
                    />
                </div>

                <div className={styles.cardcontainer}>
                    <Sightseeingcard
                        text="Photography at Ambiok Tea Garden"
                        image="/images/ambiok.jpg"
                    />
                    <Sightseeingcard
                        text="Suntaly sunrise view-point"
                        image="/images/sunrise.jpg"
                    />
                    <Sightseeingcard text="Views" image="/images/pic7.jpg" />
                </div>
            </section>
        </>
    );
}

function Sightseeingcard({ image, text }) {
    return (
        <a
            href={image}
            data-fancybox="gallery"
            data-caption={text}
            className={styles.card}
        >
            <img src={image} alt={text} className={styles.cardImage} />
            <p className={styles.cardText}>{text}</p>
        </a>
    );
}

export default Sightseeing;
