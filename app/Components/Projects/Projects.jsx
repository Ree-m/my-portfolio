import Project from "./Project";
import Stars from "../Stars";
import styles from "../../styles/projects.module.css";
// import Image1 from "../../Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg"

const Projects = () => {
  return (
    <div>
      <Stars />
      <div className={styles.projects}>
        <div className={styles.projectsTop}> 
          <h2>
            My recent <b className={styles.purple}>work</b>
          </h2>
          {/* <p>Here are a few projects I&apos;ve worked on recently.</p> */}
        </div>

        <Project
          name={"Manga Verse"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          // ImageSrc={`/../../Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg`}
          id={1}
          githubLink={"https://github.com/Ree-m/manga-verse"}
          demoLink={"https://manga-verse.onrender.com/"}
          
        />

        <Project
          name={"Skinology"}
          description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                   }
          // ImageSrc={`/../../Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg`}
          id={2}
          githubLink={"https://github.com/Ree-m/skinology-ecommerce-app"}
          demoLink={"https://skinology-ecommerce-app-client.onrender.com/"}
        />

        <Project
          name={"Book Finder"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          // ImageSrc={`/../../Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg`}
          id={3}
          githubLink={"https://github.com/Ree-m/BookFinder"}
          demoLink={"https://skinology-ecommerce-app-client.onrender.com/"}
        />
      </div>
    </div>
  );
};

export default Projects;
