import { ImageComponent } from "../ImageComponent";
import Image from "app/Assests/Screenshot 2023-06-23 231657.png"
import Button from "../Button";
import Link from "next/link";
import styles from "../../styles/project.module.css";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite, CgMoreVerticalR } from "react-icons/cg";
const Project = ({ name, description, src }) => {
  return (
    <div className={styles.project}>
      <ImageComponent
        src={Image}
        height={200}
        width={200}
        alt={`Image of ${name} app`}
      />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.btns}>
          <Link href={``}>
            <button>
              <CgMoreVerticalR />
              See More
            </button>
          </Link>

          <Link href={``}>
            <button>
              <AiFillGithub />
              Github
            </button>
          </Link>

          <Link href={``}>
            <button>
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
