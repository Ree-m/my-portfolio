
import styles from "../../styles/projectDetails.module.css";
import Stars from "../Stars";
import Image from "next/image";
import ProjectBtns from "./ProjectBtns";

const ProjectDetails = ({ projectData }) => {
  const { title, description, ImageSrc, sections } = projectData;
 

  
  return (
    <div className={styles.projectDetails}>
      <Stars />
      <div>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            {/* <Image
              src={ImageSrc}
              height={400}
              width={600}
              alt={`Image of home page`}
              className={styles.img}
            /> */}
            <img
              src={ImageSrc}
              alt={`Image of home page`}
              className={styles.img}
            />
          </div>
          <h2>{title}</h2>
          <div className={styles.btns}>
<ProjectBtns githubLink={githubLink} demoLink={demoLinks}/>
          </div>
        </div>

        <div className={styles.content}>
          {sections.map((section) => (
            <div key={section.title} className={styles.subSection}>
              <h3>{section.title}</h3>
              {section.content.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                  {section.title === "Key features"
                    ? section.images &&
                      section.images[index] && (
                        <div
                          className={`${styles.imgContainer} ${styles.imgSpacing}`}
                        >
                          {/* <Image
                          src={section.images[index]}
                          height={400}
                          width={600}
                          alt={`eImage for key featur`}
                          className={styles.img}
                        /> */}

                          <img
                            src={section.images[index]}
                            alt={`Image of the key feature`}
                            className={styles.img}
                          />
                        </div>
                      )
                    : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
