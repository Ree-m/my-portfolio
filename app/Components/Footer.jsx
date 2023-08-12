"use client";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";
import {BsTwitter} from "react-icons/bs"

import styles from "app/styles/footer.module.css";
const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className={styles.footer}>
      <span>Developed by Reem, Designed by Soumyajit Behera</span>
      <span>Copyright © 2023 Reem</span>
      <div className={styles.footerIcons}>
       
        <a target="_blank" href="https://github.com/Ree-m" arai-label="See my GitHub account">
        <AiFillGithub />
        </a>

        <a target="_blank" href="https://www.linkedin.com/in/reembsrat/" aria-label="See my LinkedIn account">
        <GrLinkedinOption />
        </a>

        <a target="_blank" href="mailto:reembsrat@gmail.com" aria-label="Email me">
        <BiLogoGmail/>
        </a>


      </div>
    </div>
  );
};

export default Footer;
