import { BiLogoReact } from "react-icons/bi";
import { DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiExpress,SiPuppeteer} from "react-icons/si";
import {AiOutlineHtml5} from "react-icons/ai"
import {BsGit} from "react-icons/bs"
import {TbBrandCss3} from "react-icons/tb"
import styles from "../../styles/tech.module.css";
const Tech = () => {
  return (
    <div className={styles.tech}>
      <h2><b className={styles.purple}>Tech</b>{" "}I use</h2>

      <div className={styles.techIcons}>
        <i>
          <DiJavascript1 />
        </i>
        <i>
          <BiLogoReact />
        </i>
        <i>
          <DiNodejs />
        </i>
        <i>
          <SiExpress />
        </i>
        <i>
          <DiMongodb />
        </i>
        <i>
          <SiNextdotjs />
        </i>

        <i>
          <AiOutlineHtml5 />
        </i>
        <i>
          <TbBrandCss3 />
        </i>
        <i>
          <BsGit />
        </i>
        <i>
          <SiPuppeteer />
        </i>
      </div>
    </div>
  );
};

export default Tech;
