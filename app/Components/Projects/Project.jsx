"use client";
import styles from "../../styles/project.module.css";
import {useRouter} from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";
const Project = ({ name, description, ImageSrc, id, githubLink, demoLink }) => {
  const router =useRouter()

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className={styles.project} onClick={()=> router.push(`/project/${id}`)} >
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

      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.btns}>
            <button onClick={()=> router.push(`/project/${id}`)}>
              <BiDetail />
              Details
            </button>

            <button onClick={() => openInNewTab(githubLink)}>
              <AiFillGithub />
              Github
            </button>

            <button onClick={() => openInNewTab(demoLink)}>
              <CgWebsite />
              Demo
            </button>
        </div>
      </div>
    </div>
  //  </Link>
  );
};

export default Project;
