"use client";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import styles from "../../styles/projectBtns.module.css";

const ProjectBtns = ({ githubLink, demoLink }) => {
 

  return (
    <div className={styles.btns}>
      <a target="_blank" href={githubLink}>
        <AiFillGithub />
        Github
      </a>

      <a target="_blank" href={demoLink}>
        <CgWebsite />
        Live
      </a>
    </div>
  );
};

export default ProjectBtns;
