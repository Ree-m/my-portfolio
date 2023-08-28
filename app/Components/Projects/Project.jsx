"use client";
import styles from "../../styles/project.module.css";
import { useRouter } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";
import {FiArrowUpRight} from "react-icons/fi"

const Project = ({ name, description, ImageSrc, id, githubLink, demoLink }) => {
  const router = useRouter();

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  
  return (
    <div
      className={styles.project}
      onClick={() => router.push(`/project/${id}`)}
    >
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

      <div className={styles.projectInfo}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.btns}>
          <button onClick={() => router.push(`/project/${id}`)}>
            <BiDetail />
            Details
          </button>

          <button onClick={() =>{
            e.stopPropagation()
            openInNewTab(githubLink)
          }}>
            <AiFillGithub />
            GitHub
          </button>

          <button onClick={(e)=>{ 
            e.stopPropagation()
            openInNewTab(demoLink)
          }}>
            <FiArrowUpRight />
            Live
          </button>
        </div>
      </div>
    </div>
    //  </Link>
  );
};

export default Project;
