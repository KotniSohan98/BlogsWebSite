import React from "react";

export const Category = () => {
  return (
    <div className="w-full lg:w-1/3 px-3">
      <div>
        <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
          POPULAR TOPICS
        </h5>
        <ul>
          <li className=" px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className=" flex items-center text-gray-600 cursor-pointer"
            >
              <span className="bg-green-300 h-4 w-4 inline-block mr-3"></span>
              Nutrition
              <span className="text-gray-500 ml-auto">23 Articles</span>
            </a>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </li>
          <li className=" px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className=" flex items-center text-gray-600 cursor-pointer"
            >
              <span className="bg-indigo-300 h-4 w-4 inline-block mr-3"></span>
              Food & Diet
              <span className="text-gray-500 ml-auto">18 Articles</span>
            </a>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </li>
          <li className=" px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className=" flex items-center text-gray-600 cursor-pointer"
            >
              <span className="bg-yellow-300 h-4 w-4 inline-block mr-3"></span>
              Workouts
              <span className="text-gray-500 ml-auto">34 Articles</span>
            </a>
            <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
          </li>
          <li className=" px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
            <a
              href="#"
              className=" flex items-center text-gray-600 cursor-pointer"
            >
              <span className="bg-blue-300 h-4 w-4 inline-block mr-3"></span>
              Immunity
              <span className="text-gray-500 ml-auto">9 Articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
