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
            Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India. I am a
            final year student pursuing an Integrated MSc in Maths and Computing
            at BIT Mesra. Additionally, I am currently employed as a software
            developer at Juspay.
          </p>

          <p> 
            Apart from coding, some other activities that I love to do!
            <br />
            Playing Games
            <br />
            Writing Tech Blogs
            <br />
            Travelling
            <br /> 
          </p>

          <p className={styles.quote}>
            `Strive to build things that make a difference!` <br/>-by Reem{" "}
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
