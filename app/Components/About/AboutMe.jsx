import { ImageComponent } from "../ImageComponent";
import Image from "public/Assests/undraw_software_engineer_re_tnjc.svg";
import styles from "../../styles/aboutMe.module.css";
const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeContent}>
        <div>
          <h2>
            Know who <b className={styles.purple}>I am</b>
          </h2>

          <p>
          I am skilled in JavaScript, MongoDB, Node.js, and JavaScript libraries and frameworks like React, Next, and Express.
</p>

          <p> 
            When not coding, my favorite things to do are
          </p>
          <ul>
            <li>Learning languages, currently I am doing an A1 mandarin course!</li>
            <li>Reading comics, I am an absoulte manga fan.</li>
            <li></li>
          </ul>

          <p className={styles.quote}>
            `Believe you can and you`&apos;`re halfway there.` <br/>-by Theodore Roosevelt
          </p>
        </div>

        <ImageComponent
          src={Image}
          height={400}
          width={400}
          alt={"About section image"}
        />
      </div>
    </div>
  );
};

export default AboutMe;
