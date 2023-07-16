"use client";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BiLogoGmail } from "react-icons/bi";

import Link from "next/link";
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
        <div>
          <i onClick={() => openInNewTab("https://github.com/Ree-m")}>
            <AiFillGithub />
          </i>
        </div>

        <div>
          <i onClick={()=>openInNewTab("https://www.linkedin.com/in/reembsrat/")}>
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
  );
};

export default Footer;
