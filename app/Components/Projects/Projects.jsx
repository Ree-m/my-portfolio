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
            "Manga Verse is a manga viewing app that utilizes a microservice architecture,integrating the Jikan API for manga data retrieval and Puppeteer for chapter scraping. Developed with technologies like Next.js, Express.js, MongoDB, and Puppeteer, Manga Verse offers a seamless user experience. Its key features include user authentication, manga browsing with genre, popularity, and release date filtering options, and an immersive manga reading experience."
          }
          ImageSrc={`/Assests/manga-verse/manga-verse-home-page.jpg`}
          id={1}
          githubLink={"https://github.com/Ree-m/manga-verse"}
          demoLink={"https://manga-verse-beta.vercel.app/"}
        />

        <Project
        
          name={"Skinology"}
          description={
            "Skinology is a full-stack ecommerce app that combines a React frontend with an Express/MongoDB backend. It boasts two interfaces,a user interface and an admin interface. The admin interface gives administrators essential functionalities such as product management through adding, editing, and deleting products while the user interface prioritizes user authentication, along with a fully functional cart for convenient shopping. "
          }
          ImageSrc={`/Assests/skinology-ecommerce-app-client-onrender-com-1024x768desktop-4d90e6.jpg`}
          id={2}
          githubLink={"https://github.com/Ree-m/skinology-ecommerce-app"}
          demoLink={"https://skinology.vercel.app/"}
        />

        <Project
          name={"Book Finder"}
          description={
            "Book Finder is a React application that leverages the Google Books API.The key feature of this app is its search functionality, allowing users to search for books by title, author, or publishing date. When a book is selected, detailed information about the book is displayed. Moreover, Book Finder is designed to be fully responsive, ensuring a seamless experience across various devices."
          }
          ImageSrc={`/Assests/book-finder/book-finder-home.jpg`}
          id={3}
          githubLink={"https://github.com/Ree-m/book-finder"}
          demoLink={"https://book-finder-tau.vercel.app/"}
        />
      </div>
    </div>
  );
};

export default Projects;
