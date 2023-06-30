"use client"
import Typewriter from 'typewriter-effect';

const TypeEffect = () => {
  return (
    <Typewriter
    className="purple"
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
