import Image from "next/image";

const Projects = () => (
  <section>
    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
      <span
        id="projects"
        className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"
      >
        Projects
      </span>
    </h1>
    <div className="my-[10vh]">
      <div className="flex flex-wrap justify-center items-center gap-10 my-[5vh] lg:mx-[23vw]  text-center">
        <div className="max-w-sm lg:max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/assets/images/HP.png"
            className="inline mt-[4vh]"
            width={550}
            height={500}
            alt="Harry Potter"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Harry Potter App
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Harry Potter App to discover and search characters in the universe
              using Nextjs and React Query.
            </p>
            <a
              href="https://react-harry-app.vercel.app/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Check it out!
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-14">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src="/assets/images/net-core.png"
            className="inline mt-[4vh]"
            width={500}
            height={400}
            alt="NET Core"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              .NET 7 Logging Api
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              .NET Core 7 api for logging parsing using TXT with parallel parsing and MongoDB insertion with React UI and
              Docker Hosting
            </p>
            <a
              href="https://github.com/viniciuscluna/LoggingReaderCompose"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Check it out!
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
          <Image
            src="/assets/images/spring.png"
            className="inline mt-[4vh]"
            width={500}
            height={520}
            alt="NET Core"
          />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Java Sales Infrastructure
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Group project done on Santander Coders using Java Spring, Docker,
              Kafka, MongoDB, Prometheus, Api Gateway and many more!
            </p>
            <a
              href="https://github.com/viniciuscluna/letscode-compose"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Check it out!
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
