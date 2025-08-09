import React, { useState } from 'react';
import styles from './componentcss/Sightseeing.module.css';

function Sightseeing() {
    const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <section className=" max-w-[1200px] mx-auto px-2">

                <div className="mt-12 px-2">
                    <h3 className="text-xl font-bold text-red-900 mb-2">Sightseeing in Nearby Attractions</h3>
                    <p className="text-gray-600 text-base">
                        Explore the breathtaking beauty around you. Whether you're into photography, relaxation, or adventure,
                        these scenic destinations offer something for everyone. From lush green valleys to misty hilltops,
                        your journey will be filled with unforgettable memories.
                    </p>
                </div>

                <div className={styles.cardcontainer}>
                    <Sightseeingcard text="Lava Mountain Town" image='/images/lava.jpg' onClick={openImage} />
                    <Sightseeingcard text="Rishop hill view" image='/images/rishop.jpg' onClick={openImage} />
                    <Sightseeingcard text="Deolo Scenic Hilltop Park" image='/images/deolopark.jpg' onClick={openImage} />
                </div>

                <div className={styles.cardcontainer}>
                    <Sightseeingcard text="Paragliding at deolo-park" image='/images/paragliding.jpg' onClick={openImage} />
                    <Sightseeingcard text="Kolakham Waterfalls" image='/images/kolakham.jpg' onClick={openImage} />
                    <Sightseeingcard text="Neora Valley's beauty" image='/images/neoravalley.jpg' onClick={openImage} />
                </div>

                <div className={styles.cardcontainer}>
                    <Sightseeingcard text="Photography at Ambiok Tea Garden" image='/images/ambiok.jpg' onClick={openImage} />
                    <Sightseeingcard text="Suntaly sunrise view-point" image='/images/sunrise.jpg' onClick={openImage} />
                    <Sightseeingcard text="Views" image='/images/pic7.jpg' onClick={openImage} />
                </div>

            </section >

            {/* Modal to display the selected image */}
            {selectedImage && (
                <div className={styles.modal} onClick={closeImage}>
                    <div className={styles.modalContent}>
                        <img src={selectedImage} alt="Selected" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </>
    );
}

function Sightseeingcard({ image, text, onClick }) {
    return (
        <div className={styles.card} onClick={() => onClick(image)}>
            <img src={image} alt={text} className={styles.cardImage} />
            <p className={styles.cardText}>{text}</p>
        </div>
    );
}

export default Sightseeing;