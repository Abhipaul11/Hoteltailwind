import React, { useEffect } from "react";
import styles from "./pagecomponentcss/homesecond.module.css";
import { FaHotel, FaMountain } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


function Homesecond() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            mirror: true,
        });

        AOS.refresh();
    }, []);
    return (
        <section className={styles.homesecond}>
            <div className={styles.left} data-aos="fade-up" data-aos-delay="100">
                <div className={styles.imageBox}>
                    <img src="/images/test.jpg" alt="Shanti Inn Hotel Jhandi" />
                    <div className={styles.badge}>
                        Top rated Stay in Jhandi
                    </div>
                </div>
                <div className={styles.circleLogo}>
                    <img src="/images/img3.jpg" alt="Shanti Inn Logo" />
                </div>
            </div>

            <div className={styles.right} data-aos="fade-up" data-aos-delay="300">
                <p className={styles.subheading}>Why Choose Us</p>
                <h2 className={styles.heading}>
                    Shanti Inn Jhandi – <span>Best hotel in Jhandi</span>
                </h2>
                <p className={styles.desc}>
                    Your ideal stay in the peaceful hills of Kalimpong. Our hotel in Jhandi offers the best accommodation with spacious rooms, modern amenities, and warm hospitality. Surrounded by lush greenery and panoramic Himalayan views, Shanti Inn is perfect for couples, families, and nature lovers looking for a relaxing holiday. Wake up to the fresh mountain breeze, taste authentic local food, and explore nearby attractions like Lava, Loleygaon, and Sillerygaon. For a memorable stay in North Bengal, Shanti Inn Jhandi is your perfect choice.
                </p>

                <div className={styles.homesecondcards}>
                    <div className="px-6 py-4 rounded-lg shadow-lg bg-slate-100" data-aos="fade-up" >
                        <h5 className="flex gap-1">
                            <FaHotel className={styles.icon} /> Comfortable Stay
                        </h5>
                        <p className="text-sm">
                            Well-furnished rooms with cozy interiors, ensuring a relaxed and homely stay.
                        </p>
                    </div>

                    <div className="px-6 py-4 rounded-md shadow-lg bg-slate-100" data-aos="fade-up" >
                        <h5 className="flex gap-1">
                            <FaMountain className={styles.icon} /> Scenic Location
                        </h5>
                        <p className="text-sm">
                            Surrounded by lush greenery and panoramic mountain views, perfect for nature lovers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homesecond;
