import styles from "../../styles/projectDetails.module.css";
import Stars from "../Stars";
import { ImageComponent } from "../ImageComponent";
import Image from "next/image";
import src from "app/Assests/Screenshot 2023-06-23 231657.png"
const ProjectDetails = ({ projectData }) => {
  const {title,description,src}=projectData
  return (
    <div className={styles.projectDetails}>
      <Stars />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        
      <Image src={src} alt={`ff`} height={200} width={200}/>

      </div>
    </div>
  );
};

export default ProjectDetails;
