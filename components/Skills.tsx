import { faNodeJs, faReact, faSass, faJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
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
      <div className=" m-[10vh] flex justify-center items-center">
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Front-end</option>
              <option>Back-end</option>
              <option>Cloud</option>
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
              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faReact}
                    className="mb-2"
                    style={{ fontSize: 100 }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                      React
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="mb-2"
                    style={{ fontSize: 100 }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                      Node
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faSass}
                    className="mb-2"
                    style={{ fontSize: 100 }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                      Sass
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dl className="mb-3 text-8xl lg:text-8xl">
                        TS
                    </dl>
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                      TypeScript
                    </span>
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="mb-2"
                    style={{ fontSize: 100 }}
                  />
                  <dd className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-1sm lg:text-1xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
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
              id="front-tab"
              role="tabpanel"
              aria-labelledby="front-tab"
            >
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <ul
                role="list"
                className="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">Templates for everyone</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">Development workflow</span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div>
            <div
              className={classNames(
                "p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800",
                isCloudSelected ? "" : "hidden"
              )}
              id="front-tab"
              role="tabpanel"
              aria-labelledby="front-tab"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classNamees="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                data-inactive-classNamees="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded="true"
                    aria-controls="accordion-flush-body-1"
                  >
                    <span>What is Flowbite?</span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-1"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-1"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-2"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-2"
                  >
                    <span>Is there a Figma file available?</span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-2"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-2"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="https://flowbite.com/figma/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classNamees from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                    data-accordion-target="#accordion-flush-body-3"
                    aria-expanded="false"
                    aria-controls="accordion-flush-body-3"
                  >
                    <span>
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id="accordion-flush-body-3"
                  className="hidden"
                  aria-labelledby="accordion-flush-heading-3"
                >
                  <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="https://flowbite.com/pro/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/"
                          rel="nofollow"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
