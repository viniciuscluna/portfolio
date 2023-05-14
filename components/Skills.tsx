import {
  faNodeJs,
  faReact,
  faSass,
  faJs,
  faMicrosoft,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faDatabase,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const Skills = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const unselectedButton =
    "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600";
  const selectedButton =
    "inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500";

  const isFrontEndSelected = useMemo(() => currentTab === 0, [currentTab]);
  const isBackEndSelected = useMemo(() => currentTab === 1, [currentTab]);
  const isCloudSelected = useMemo(() => currentTab === 2, [currentTab]);

  return (
    <section>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        <span
          id="skills"
          className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"
        >
          Skills
        </span>
      </h1>
      <div className=" my-[10vh] flex justify-center items-center">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCurrentTab(parseInt(e.target.value))
              }
            >
              <option value={0}>Front-end</option>
              <option value={1}>Back-end</option>
              <option value={2}>Cloud</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="front-tab"
                type="button"
                role="tab"
                aria-controls="front-tab"
                onClick={() => setCurrentTab(0)}
                aria-selected={isFrontEndSelected}
                className={
                  isFrontEndSelected ? selectedButton : unselectedButton
                }
              >
                Front-end
              </button>
            </li>
            <li className="w-full">
              <button
                id="back-tab"
                type="button"
                role="tab"
                aria-controls="back-tab"
                onClick={() => setCurrentTab(1)}
                aria-selected={isBackEndSelected}
                className={
                  isBackEndSelected ? selectedButton : unselectedButton
                }
              >
                Back-end
              </button>
            </li>
            <li className="w-full">
              <button
                id="cloud-tab"
                type="button"
                role="tab"
                aria-controls="cloud-tab"
                onClick={() => setCurrentTab(2)}
                aria-selected={isCloudSelected}
                className={isCloudSelected ? selectedButton : unselectedButton}
              >
                Cloud
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              className={classNames(
                "p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800",
                isFrontEndSelected ? "" : "hidden"
              )}
              id="front-tab"
              role="tabpanel"
              aria-labelledby="front-tab"
            >
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8 ">
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      React
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      Node
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faSass}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      Sass
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dl className="mb-3 text-8xl lg:text-8xl">
                    <Image
                      width={100}
                      height={50}
                      src="/assets/images/typescript.png"
                      alt="Typescript Logo"
                    />
                  </dl>
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      TypeScript
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      JavaScript
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div
              className={classNames(
                "p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800",
                isBackEndSelected ? "" : "hidden"
              )}
              id="back-tab"
              role="tabpanel"
              aria-labelledby="back-tab"
            >
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8 ">
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faMicrosoft}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      NET Core
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center mt-6">
                  <FontAwesomeIcon
                    icon={faMicrosoft}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl text-center ">
                    <span className="text-4xl font-extrabold dark:text-white">
                      .NET Framework
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faServer}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      SQL Server
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      MongoDB
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
            <div
              className={classNames(
                "p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800",
                isCloudSelected ? "" : "hidden"
              )}
              id="cloud-tab"
              role="tabpanel"
              aria-labelledby="cloud-tab"
            >
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8 ">
                <div className="flex flex-col items-center justify-center">
                  <dl className="mb-3 text-8xl lg:text-8xl">
                    <Image
                      width={100}
                      height={50}
                      src="/assets/images/azure.png"
                      alt="Typescript Logo"
                    />
                  </dl>
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      Azure
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dl className="mb-3 text-8xl lg:text-8xl">
                    <Image
                      width={100}
                      height={50}
                      src="/assets/images/pcf.png"
                      alt="Typescript Logo"
                    />
                  </dl>
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      PCF
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faDocker}
                    className="mb-2"
                    style={{ fontSize: 100, color: "#fff" }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      Docker
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dl className="mb-3 text-8xl lg:text-8xl">
                    <Image
                      width={100}
                      height={50}
                      src="/assets/images/kubernetes.png"
                      alt="Typescript Logo"
                    />
                  </dl>
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-4xl font-extrabold dark:text-white">
                      Kubernetes
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4">
        <a
          href="#about"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Go to Top
          <FontAwesomeIcon
            className="ml-2 mt-1"
            icon={faArrowUp}
            style={{ fontSize: 15 }}
          />
        </a>
      </div>
    </section>
  );
};

export default Skills;
