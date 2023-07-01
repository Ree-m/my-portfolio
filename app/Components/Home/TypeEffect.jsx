"use client"
import Typewriter from 'typewriter-effect';
import styles from "app/styles/typeEffect.module.css"

const TypeEffect = () => {
  return (
    <div className={styles.typeEffect}>
      <Typewriter
      options={{
        strings: ["Software Developer", "MERN Developer","Full Stack Enthusiast"],
        autoStart: true,
        loop: true,
        deleteSpeed:45

      }}
    />
    </div>
    
  );
};

export default TypeEffect;
