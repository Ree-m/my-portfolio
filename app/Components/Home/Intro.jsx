"use client"
import Link from "next/link";
import styles from "../../styles/intro.module.css";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import {BiLogoGmail} from "react-icons/bi"
import Image from "public/Assests/avatar.svg";
import { ImageComponent } from "../ImageComponent";
const Intro = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (

    <div className={styles.intro}>
     
      <div className={styles.introMain}>
        <div>
        <h1>
        Let me <span className={styles.purple}>introduce</span> myself
      </h1>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p>
            I am fluent in classics like
            <b className={styles.purple}> C++, Javascript and Go. </b>
          </p>
          <p>
            My field of Interest are building new{" "}
            <b className={styles.purple}> Web Technologies and Products</b> and
            also in areas related to
            <b className={styles.purple}>Blockchain.</b>
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <b className={styles.purple}></b>Node.js and{" "}
            <b className={styles.purple}>
              Modern Javascript Library and Frameworks
            </b>
            {" "} like <b className={styles.purple}> React.js and Next.js</b>
          </p>
        </div>

        <ImageComponent
          src={Image}
          height={250}
          width={250}
          alt={"Main home page image"}
        />
      </div>

      <div className={styles.socials}>
        <h2>Find me on</h2>
        <p>
          Feel free to <b className={styles.purple}>connect</b> with me.
        </p>
        <div className={styles.icons}>
         
        <div>
          <i onClick={() => openInNewTab("https://github.com/Ree-m")}>
            <AiFillGithub />
          </i>
        </div>

        <div>
          <i onClick={()=>openInNewTab("https://www.linkedin.com/in/reem-bsrat-52a979264/")}>
            <GrLinkedinOption />
          </i>
        </div>

      

        <div>
          <i  onClick={() => window.location = 'mailto:reembsrat@gmail.com'}>
            <BiLogoGmail/>
          </i>
        </div>
  
        </div>
      </div>
    </div>
  );
};

export default Intro;
