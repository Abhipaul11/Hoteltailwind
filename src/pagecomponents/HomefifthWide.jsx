import React, { useEffect } from "react";
import styles from "./pagecomponentcss/homefifthwide.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function HomefifthWide() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });

    AOS.refresh();
  }, []);



  return (
    <div className="px-1" id="form_book">
      <div className={styles.homefifth}>
        <div
          className={styles.homefifthimg}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src="/images/lava.jpg" alt="Living Room" />
        </div>
        <div
          className={styles.homefifthcontent}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2>Comfortable Stays</h2>
          <p className="text-gray-700 leading-relaxed space-y-3">
            <span>
              <strong>Shanti Inn Jhandi</strong> offers the best <em>accommodation in Jhandi</em> with
              spacious and well-maintained rooms that ensure comfort and peace during your stay.
              Located near <strong>Kalimpong and Lava</strong>, our hotel is easily accessible with
              good transportation facilities.
            </span>
            <br />

            <span>
              🌄 Wake up to breathtaking views of the Himalayas, surrounded by pine forests, tea
              gardens, and the refreshing mountain breeze.
            </span>
            <br />

            <span>
              🛏️ Each room is designed with modern amenities, cozy interiors, and large windows,
              perfect for couples, families, and group travelers.
            </span>
            <br />

            <span>
              🔥 In the evenings, enjoy a warm <strong>bonfire experience</strong> under the starry
              sky, making your holiday truly memorable.
            </span>
            <br />

            <span>
              🍲 Relish delicious homely meals with a mix of local and traditional cuisines,
              prepared with care and hospitality.
            </span>
            <br />

            <span>
              🚗 With easy transport options and nearby sightseeing spots like <em>Loleygaon,
                Sillerygaon, and Ramdhura</em>, Shanti Inn is the perfect base for your North Bengal trip.
            </span>
            <br />

            <span>
              👨‍👩‍👧 Ideal for families, nature lovers, honeymooners, and weekend travelers
              seeking both relaxation and adventure in the hills.
            </span>
          </p>

          <div className={styles.homefifth_card}>
            <div className={styles.fifthcard_content}>
              <h4>Relax in Comfort</h4>
              <h3>Cozy Rooms & More</h3>
              <p>
                Our rooms are thoughtfully designed with wooden interiors, spacious beds,
                and beautiful views of nature. Guests can also enjoy evening bonfires,
                tasty home-cooked meals, and seamless travel assistance. At Shanti Inn,
                we ensure your stay is not just comfortable, but also unforgettable.
              </p>
            </div>

            <div className={styles.imgbox}>
              <img
                src="/images/room.jpg"
                alt="Hotel Room at Shanti Inn Jhandi with mountain view"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomefifthWide;
