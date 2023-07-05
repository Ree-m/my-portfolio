import { ImageComponent } from "../ImageComponent";
import Image from "app/Assests/Screenshot 2023-07-04 050524.png"
import Link from "next/link";
import styles from "../../styles/project.module.css";

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite, CgMoreVerticalR } from "react-icons/cg";
import {BiDetail} from "react-icons/bi"
const Project = ({ name, description, src,id }) => {
  return (
    <div className={styles.project}>
      <ImageComponent
        src={Image} 
        height={300}
        width={300}
        objectFit="contain"
        alt={`Image of ${name} app`}
      />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.btns}>
          <Link href={`/project/${id}`}>
            <button>
              <BiDetail/>
              Details
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
