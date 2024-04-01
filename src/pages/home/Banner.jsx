import React from "react";

export const Banner = () => {
  return (
    <div className="block md:flex md:space-x-2 px-2 lg:p-0">
      <a
        href="#"
        className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
        style={{ height: "24em" }}
      >
        <div
          className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
          alt="First Example"
          className="object-cover z-0 rounded absolute left-0 top-0 w-full h-full"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <span className=" bg-black text-gray-200 px-4 py-1 mb-2 inline-flex items-center justify-center">
            Nutrition
          </span>
          <h2 className=" text-4xl font-semibold text-gray-100 leading-tight">
            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales,
            massa et auctor.
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              className="h-10 w-10 rounded-full"
              alt="Author"
            />
            <div className="ml-2">
              <p className="font-semibold text-gray-200 text-sm">
                Mike Sullivan
              </p>
              <p className=" font-semibold text-gray-400 text-xs">14 Aug</p>
            </div>
          </div>
        </div>
      </a>

      <a
        href="#"
        style={{ height: "24em" }}
        className="w-full md:w-1/3 relative rounded"
      >
        <div
          className="absolute left-0 top-0 w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        ></div>
        <img
          src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
          alt="Second Example"
          className="absolute left-0 top-0 w-full h-full z-0 object-cover rounded"
        />
        <div className="absolute left-0 bottom-0 z-20 p-4">
          <span className="bg-black text-gray-200 px-4 py-1 mb-2 inline-flex items-center justify-center">
            Science
          </span>
          <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h2>
          <div className="flex mt-3">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="Author"
              className="h-10 w-10 rounded-full "
            />
            <div className="ml-2">
              <p className=" font-semibold text-gray-200 text-sm">
                Chrishell Staus
              </p>
              <p className=" font-semibold text-gray-400 text-xs">15 Aug</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
