import { ImageComponent } from "../ImageComponent";
import Image from "next/image";
// import ImageSrc from "public/Assests/undraw_software_engineer_re_tnjc.svg";
import styles from "../../styles/aboutMe.module.css";
const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.aboutMeContent}>
        <div>
          <h2>
            Know who <b className={styles.purple}>I am</b>
          </h2>
          <p>I somehow ended up coding and so far I enjoy it quite a lot.</p>

          <p>
          I am skilled in JavaScript, Node.js, MongoDB, and JavaScript libraries and frameworks like React, Next, and Express. I am always looking to learn to expand my skill set.
</p>

<p>
            I prefer back-end over front-end, until I am two days deep into
            solving a new-to-me server error and then somehow React is the best
            thing ever 😆
          </p>

          <p> 
            When not coding, my favorite things to do are:
          </p>
          <br/>
          <ul>
            <li>Learning languages, currently I am doing an A1 Mandarin course!</li>
            <li>Reading comics, I am an absolute manga fan.</li>
            <li>Watching movies or shows.</li>
          </ul>

          <p className={styles.quote}>
            `Believe you can and you&apos;re halfway there.` <br/>-by Theodore Roosevelt
          </p>
        </div>
        <div className={`${styles.heroImg} ${styles.imgContainer}`}>
            {/* <Image
              src={ImageSrc} 
              height={400}
              width={400}
              alt={`Image of hero`}
              className={styles.img}
            /> */}
          </div>
      </div>
    </div>
  );
};

export default AboutMe;
