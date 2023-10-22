"use client";
import styles from "../../styles/project.module.css";
import { useRouter } from "next/navigation";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";

const Project = ({ name, description, ImageSrc, id, githubLink, demoLink }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/project/${id}`);
      }}
      className={styles.projectContainer}
    >
      <div className={styles.project}>
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
            <a
              href={`/project/${id}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <BiDetail />
              Details
            </a>

            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <AiFillGithub />
              GitHub
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={demoLink}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CgWebsite />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
