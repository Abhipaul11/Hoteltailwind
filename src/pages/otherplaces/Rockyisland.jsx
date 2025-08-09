import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../pagecomponents/Banner';
import Roomcard from '../../pagecomponents/Roomcard';
import styles from '../pagecss/Takdah.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import placesData from '../../constants/Otherplace';

function RockyIsland() {
    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);

    const rockyisland = placesData.rockyisland;

    return (
        <>
            <Banner title={rockyisland.title} description={rockyisland.description} image={rockyisland.image} />

            <h2 className={styles.rheading}>Rooms in <span>Rocky Island</span></h2>
            <div className={styles.rooms}>
                {rockyisland.rooms.map((room, index) => (
                    <Roomcard
                        key={index}
                        image={room.image}
                        bednum={room.bednum}
                        price={room.price}
                        bednumber={room.bednumber}
                        guest={room.guest}
                        wlink="https://wa.me/918240913778?text=Hello%20Shanti%20Group!%20I'm%20interested%20in%20room%20booking%20in%20Rocky%20Island.%20Can%20you%20please%20provide%20more%20details?"
                    />
                ))}
            </div>

            <h2 className={styles.rheading}>Explore <span>Photos</span></h2>
            <div data-aos="fade-right">
                <div className={styles.photos}>
                    {rockyisland.photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Rocky Island ${index + 1}`} />
                    ))}
                </div>
            </div>

        </>
    );
}

export default RockyIsland;
