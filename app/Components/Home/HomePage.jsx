import TypeEffect from "./TypeEffect"
import Stars from "../Stars";
import Intro from "./Intro";
import Image from "../../Assests/undraw_dev_focus_re_6iwt.svg"
import styles from "../../styles/homePage.module.css"

import { ImageComponent } from "../ImageComponent";
const HomePage = () => {
  return (
    <div>
      <Stars/>

      <h1>
        Hi There! <span className={styles.wave}>👋🏻</span>
      </h1>

      <h1>
        I AM
        <strong> REEM BSRAT</strong>
      </h1>

      <ImageComponent src={Image} height={200} width={200} alt={"Main home page image"} />
      <TypeEffect/>
      <Intro/>
    </div>
  );
};

export default HomePage;
