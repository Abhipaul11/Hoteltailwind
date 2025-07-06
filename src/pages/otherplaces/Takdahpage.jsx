import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../pagecomponents/Banner';
import Roomcard from '../../pagecomponents/Roomcard';
import styles from '../pagecss/Takdah.module.css';
import placesData from '../../constants/Otherplace';

function Takdahpage() {
    const takdah = placesData.takdah;

    return (
        <>
            <Navbar />

            <Banner title={takdah.title} description={takdah.description} image={takdah.image} />

            <h2 className={styles.rheading}>Rooms in <span>Takdah</span> </h2>

            <div className={styles.rooms}>
                {takdah.rooms.map((room, index) => (
                    <Roomcard
                        key={index}
                        image={room.image}
                        bednum={room.bednum}
                        price={room.price}
                        bednumber={room.bednumber}
                        guest={room.guest}
                        wlink={`https://wa.me/918240913778?text=Hello%20Shanti%20Group!%20I'm%20interested%20in%20room%20booking%20in%20Takdah.%20Can%20you%20please%20provide%20more%20details?`}
                    />
                ))}
            </div>

            <h2 className={styles.rheading}>Explore <span>Photos</span> </h2>
            <div className={styles.photos}>
                {takdah.photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Takdah ${index + 1}`} />
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Takdahpage;
