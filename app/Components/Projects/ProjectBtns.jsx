"use client"
import Link from "next/link"
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import styles from "../styles/projectBtns.module.css"

const ProjectBtns = ({githubLink,demoLink}) => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };


  return (
    <div className={styles.btns}>
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
  )
}

export default ProjectBtns