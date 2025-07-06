import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../pagecomponents/Banner';
import Roomcard from '../../pagecomponents/Roomcard';
import styles from '../pagecss/Takdah.module.css';
import placesData from '../../constants/Otherplace';

function Sillerygaon() {
    const sillerygaon = placesData.sillerygaon;

    return (
        <>
            <Navbar />

            <Banner title={sillerygaon.title} description={sillerygaon.description} image={sillerygaon.image} />

            <h2 className={styles.rheading}>Rooms in <span>Sillerygaon</span> </h2>

            <div className={styles.rooms}>
                {sillerygaon.rooms.map((room, index) => (
                    <Roomcard
                        key={index}
                        image={room.image}
                        bednum={room.bednum}
                        price={room.price}
                        bednumber={room.bednumber}
                        guest={room.guest}
                        wlink={`https://wa.me/918240913778?text=Hello%20Shanti%20Group!%20I'm%20interested%20in%20room%20booking%20in%20Sillerygaon.%20Can%20you%20please%20provide%20more%20details?`}
                    />
                ))}
            </div>

            <h2 className={styles.rheading}>Explore <span>Photos</span> </h2>
            <div className={styles.photos}>
                {sillerygaon.photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Sillerygaon ${index + 1}`} />
                ))}
            </div>

            <Footer />
        </>
    );
}

export default Sillerygaon;
