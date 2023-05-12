import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "My name is Vinícius Luna",
  "A Full-Stack Software Engineer",
  "Experienced on .NET Core",
  "Experienced on ReactJS",
  "Experienced on TypeScript",
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      5000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id="about" className="m-auto text-center flex flex-col h-screen justify-center items-center">
      <div>
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Hey <span className="text-blue-600 dark:text-blue-500">there!</span>
        </h1>
        <h1 className="mb-8 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white ">
          <TextTransition
            className="text-center"
            springConfig={presets.gentle}
            inline={true}
          >
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Full stack developer in modern technologies with a focus on high
          performance architecture and scalability
        </p>
        <a
          href="#career"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          My Career
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default About;
