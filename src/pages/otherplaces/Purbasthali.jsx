import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../pagecomponents/Banner'
import Roomcard from '../../pagecomponents/Roomcard';
import styles from '../pagecss/Takdah.module.css';
import placesData from '../../constants/Otherplace';
import Footer from '../../components/Footer';

function Purbasthali() {
    const purbasthali = placesData.purbasthali
    return (
        <>
            <Banner title={purbasthali.title} description={purbasthali.description} image={purbasthali.image} />

            <h2 className={styles.rheading}>Rooms in <span>Purbasthali</span></h2>
            <div className={styles.rooms}>
                {purbasthali.rooms.map((room, index) => (
                    <Roomcard
                        key={index}
                        image={room.image}
                        bednum={room.bednum}
                        price={room.price}
                        bednumber={room.bednumber}
                        guest={room.guest}
                        wlink="https://wa.me/918240913778?text=Hello%20Shanti%20Group!%20I'm%20interested%20in%20room%20booking%20in%Purbasthali.%20Can%20you%20please%20provide%20more%20details?"
                    />
                ))}
            </div>

            <h2 className={styles.rheading}>Explore <span>Photos</span></h2>

            <div className={styles.photos}>
                {purbasthali.photos.map((photo, index) => (
                    <img key={index} src={photo} alt='' />
                ))}
            </div>

        </>
    )
}

export default Purbasthali