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
        <i aria-label="JavaScript">
          <DiJavascript1 /> 
        </i>
        <i aria-label="React.js">
          <BiLogoReact />
        </i>
        <i aria-label="Node.js">
          <DiNodejs />
        </i>
        <i aria-label="Express.js">
          <SiExpress />
        </i>
        <i aria-label="MongoDB">
          <DiMongodb />
        </i>
        <i aria-label="Next.js">
          <SiNextdotjs />
        </i>

        <i aria-label="HTML5">
          <AiOutlineHtml5 />
        </i>
        <i aria-label="CSS3">
          <TbBrandCss3 />
        </i>
        <i aria-label="Git">
          <BsGit />
        </i>
        <i aria-label="Puppeteer">
          <SiPuppeteer />
        </i>
      </div>
    </div>
  );
};

export default Tech;
