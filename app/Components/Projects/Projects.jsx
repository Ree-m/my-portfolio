import Project from "./Project";
import Stars from "../Stars";
const Projects = () => {
  return (
    <div>
      <Stars />
      <div>
        <h2>My recent work</h2>
        <p>Here are a few projects i worked on recently</p>

        <Project
          name={"Manga Verse"}
          description={"Manga verse is a manga app."}
        />
      </div>

    </div>
  );
};

export default Projects;
