import styles from "../../styles/projectDetails.module.css";
import Stars from "../Stars";
const ProjectDetails = ({ projectData }) => {
  return (
    <div className={styles.projectDetails}>
      <Stars />
      <div>
        <h2>{projectData.title}</h2>
        <p>{projectData.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;
