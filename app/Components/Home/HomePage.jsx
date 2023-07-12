import TypeEffect from "./TypeEffect";
import Stars from "../Stars";
import Intro from "./Intro";
import Image from "next/image";
import ImageSrc from "public/Assests/undraw_dev_focus_re_6iwt.svg";
import styles from "../../styles/homePage.module.css";

// import { ImageComponent } from "../ImageComponent";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Stars />

      <div>
        <div className={styles.hero}>

          <div className={styles.heroPart1}>
            <h1>
              Hi There! <span className={styles.wave}>👋🏻</span>
            </h1>

            <h1>
              I AM
              <strong className="purple"> REEM BSRAT</strong>
            </h1>
            <TypeEffect />
          </div>

          <div className={`${styles.heroImg} ${styles.imgContainer}`}>
            <Image
              src={ImageSrc}
              height={400}
              width={400}
              alt={`Image of hero`}
              className={styles.img}
            />
          </div>
        </div>

        <Intro />
      </div>
    </div>
  );
};

export default HomePage;
