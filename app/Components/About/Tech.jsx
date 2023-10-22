import { BiLogoReact, BiLogoPostgresql } from "react-icons/bi";
import { DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import {
  SiNextdotjs,
  SiExpress,
  SiPuppeteer,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsGit } from "react-icons/bs";
import { TbBrandCss3 } from "react-icons/tb";
import styles from "../../styles/tech.module.css";
const Tech = () => {
  return (
    <div className={styles.tech}>
      <h2>
        <b className={styles.purple}>Tech</b> I use
      </h2>

      <div className={styles.techIcons}>
        <div role="img" aria-label="JavaScript">
          <i>
            <DiJavascript1 />
          </i>
        </div>

        <div role="img" aria-label="TypeScript">
          <i>
            <SiTypescript />
          </i>
        </div>

        <div role="img" aria-label="React.js">
          <i>
            <BiLogoReact />
          </i>
        </div>

        <div role="img" aria-label="Next.js">
          <i>
            <SiNextdotjs />
          </i>
        </div>

        <div role="img" aria-label="Node.js">
          <i>
            <DiNodejs />
          </i>
        </div>
        <div role="img" aria-label="Express.js">
          <i>
            <SiExpress />
          </i>
        </div>
        <div role="img" aria-label="MongoDB">
          <i>
            <DiMongodb />
          </i>
        </div>

        <div role="img" aria-label="PostgreSQL">
          <i>
            <BiLogoPostgresql />
          </i>
        </div>

        <div role="img" aria-label="HTML5">
          <i>
            <AiOutlineHtml5 />
          </i>
        </div>

        <div role="img" aria-label="CSS3">
          <i>
            <TbBrandCss3 />
          </i>
        </div>
        <div role="img" aria-label="Git">
          <i>
            <BsGit />
          </i>
        </div>

        <div role="img" aria-label="Puppeteer">
          <i>
            <SiPuppeteer />
          </i>
        </div>
      </div>
    </div>
  );
};

export default Tech;
