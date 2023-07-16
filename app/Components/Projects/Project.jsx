"use client";
import Image from "next/image";
// import ImageSrc from "/Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg"
import Link from "next/link";
import styles from "../../styles/project.module.css";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";
const Project = ({ name, description, ImageSrc, id, githubLink, demoLink }) => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className={styles.project}>
      <div className={styles.imgContainer}>
        {/* <Image
            src={ImageSrc}
            height={400}
            width={400}
            // layout="responsive"
            alt={`Image of ${name} app`}
            className={styles.img}
          /> */}
        <div className={styles.imgContainer}>
          <img
            src={ImageSrc}
            alt={`Image of ${name} app`}
            className={styles.img}
          />
        </div>
      </div>

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.btns}>
          <Link href={`/project/${id}`}>
            <button>
              <BiDetail />
              Details
            </button>
          </Link>

          <Link href={``}>
            <button onClick={() => openInNewTab(githubLink)}>
              <AiFillGithub />
              Github
            </button>
          </Link>

          <Link href={``}>
            <button onClick={() => openInNewTab(demoLink)}>
              <CgWebsite />
              Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
