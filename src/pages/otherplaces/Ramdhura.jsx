import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Banner from '../../pagecomponents/Banner';
import Roomcard from '../../pagecomponents/Roomcard';
import styles from '../pagecss/Takdah.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import placesData from '../../constants/Otherplace';

function Ramdhura() {
    useEffect(() => {
        AOS.init({ duration: 300 });
    }, []);

    const ramdhura = placesData.ramdhura;

    return (
        <>
            <Banner title={ramdhura.title} description={ramdhura.description} image={ramdhura.image} />

            <h2 className={styles.rheading}>Rooms in <span>Ramdhura</span></h2>
            <div className={styles.rooms}>
                {ramdhura.rooms.map((room, index) => (
                    <Roomcard
                        key={index}
                        image={room.image}
                        bednum={room.bednum}
                        price={room.price}
                        bednumber={room.bednumber}
                        guest={room.guest}
                        wlink="https://wa.me/918240913778?text=Hello%20Shanti%20Group!%20I'm%20interested%20in%20room%20booking%20in%20Ramdhura.%20Can%20you%20please%20provide%20more%20details?"
                    />
                ))}
            </div>

            <h2 className={styles.rheading}>Explore <span>Photos</span></h2>
            <div data-aos="fade-right">
                <div className={styles.photos}>
                    {ramdhura.photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Ramdhura ${index + 1}`} />
                    ))}
                </div>
            </div>

        </>
    );
}

export default Ramdhura;
