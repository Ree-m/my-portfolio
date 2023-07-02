import Project from "./Project";
import Stars from "../Stars";
import styles from "../../styles/projects.module.css";
const Projects = () => {
  return (
    <div>
      <Stars />
      <div className={styles.projects}>
        <div className={styles.projectsTop}>
          <h2>
            My recent <b className={styles.purple}>work</b>
          </h2>
          <p>Here are a few projects I`&apos;`ve worked on recently.</p>
        </div>

        <Project
          name={"Manga Verse"}
          description={
            "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
          }
          src={"/app/Assests/Screenshot 2023-06-23 231657.png"}
          id={1}
        />

        <Project
          name={"Manga Verse"}
          description={
            "My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
          }
          src={"/app/Assests/Screenshot 2023-06-23 231657.png"}
          id={2}
        />

        <Project
          name={"Manga Verse"}
          description={
            "Supports dark mode and easy to write blogs using markdownMy personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
          }
          id={3}
        />
      </div>
    </div>
  );
};

export default Projects;
