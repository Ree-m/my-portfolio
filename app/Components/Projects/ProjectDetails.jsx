

// import styles from "../../styles/projectDetails.module.css";
// import Stars from "../Stars";
// import Image from "next/image";
// // import src from "./Assests/Screenshot 2023-06-23 231657.png";
// const ProjectDetails = ({ projectData }) => {
//   const { title, description, ImageSrc, sections } = projectData;
//   return (
//     <div className={styles.projectDetails}>
//       <Stars />
//       <div>
//         <div className={styles.top}>
//           <div className={styles.imgContainer}>
//             <Image
//               src={ImageSrc}
//               height={400}
//               width={600}
//               alt={`Image of home page`}
//               className={styles.img}
//             />
//           </div>
//           <h2>{title}</h2>
//         </div>

//         <div className={styles.content}>
//           {sections.map((section) => (
//             <div key={`${section.title}`} className={styles.subSection}>
//               <h3>{section.title}</h3>
//               {section.content.map((p) => (
//                 <p key={p}>{p}</p>
//               ))}
//               {section.images&& section.images.map((image) => (
//                 <Image
//                   src={image}
//                   height={400}
//                   width={600}
//                   alt={`Image of home page`}
//                   className={styles.img}
//                   key={image}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;




// "use client"
// import React from "react";
import styles from "../../styles/projectDetails.module.css";
import Stars from "../Stars";
import Image from "next/image";
// import src from "./Assests/Screenshot 2023-06-23 231657.png";
const ProjectDetails = ({ projectData }) => {
  const { title, description, ImageSrc, sections } = projectData;
  return (
    <div className={styles.projectDetails}>
      <Stars />
      <div>
        <div className={styles.top}>
          <div className={styles.imgContainer}>
            <Image
              src={ImageSrc}
              height={400}
              width={600}
              alt={`Image of home page`}
              className={styles.img}
            />
          </div>
          <h2>{title}</h2>
        </div>

        <div className={styles.content}>
          {sections.map((section) => (
            <div key={section.title} className={styles.subSection}>
              <h3>{section.title}</h3>
              {section.content.map((item, index) => (
                <div key={index}>
                  <p>{item}</p>
                  {section.title === "Key features"?
                    section.images &&
                    section.images[index] && (
                      <div className={styles.imgContainer}>
                        <Image
                          src={section.images[index]}
                          height={400}
                          width={600}
                          alt={`Image for key feature`}
                          className={styles.img}
                        />
                      </div>
                    ): null}
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

