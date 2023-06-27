"use client"
import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "MERN Stack Developer","Full Stack Enthusiast"],
        autoStart: true,
        loop: true,
        deleteSpeed:45
      }}
    />
  );
};

export default TypeEffect;
