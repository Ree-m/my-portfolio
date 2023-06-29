import { ImageComponent } from "../ImageComponent";
import Image from "app/Assests/undraw_dev_focus_re_6iwt.svg";
const AboutMe = () => {
  return (
    <div>
      <h2>Know who I am </h2>

      <div>
        <p>
          Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India. I am a
          final year student pursuing an Integrated MSc in Maths and Computing
          at BIT Mesra. Additionally, I am currently employed as a software
          developer at Juspay.
        </p>

        <p>
          Apart from coding, some other activities that I love to do!
          <br />
          Playing Games
          <br />
          Writing Tech Blogs
          <br />
          Travelling
          <br />
        </p>

        {/* "Strive to build things that make a difference!" -Soumyajit</p> */}
        <ImageComponent
          src={Image}
          height={200}
          width={200}
          alt={"About section image"}
        />
      </div>
    </div>
  );
};

export default AboutMe;
