import styles from "../../styles/projectDetails.module.css";
import Stars from "../Stars";
import { ImageComponent } from "../ImageComponent";
import Image from "next/image";
// import src from "./Assests/Screenshot 2023-06-23 231657.png";
const ProjectDetails = ({ projectData }) => {
  const { title, description, src,sections } = projectData;
  return (
    <div className={styles.projectDetails}>
      <Stars />
      <div>
        <div className={styles.top}>
        <Image src={src} alt={`ff`} height={200} width={200} />
        <h2>{title}</h2>
        </div>
        

        <div className={styles.content}>
            
            <div className={styles.subSection}>
              <h3>{`What is ${title}?`}</h3>
              <p>{description}</p>
            </div>
         {sections.map((section)=>(
          <div key={`${section.title}`} className={styles.subSection}>
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
         ))}

          </div>
        </div>
      </div>
  );
};

export default ProjectDetails;
