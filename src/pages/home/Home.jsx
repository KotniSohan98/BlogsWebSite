import React from "react";
import { Banner } from "./Banner";
import { PostCards } from "../blogs/PostCards";
import { Category } from "./Category";

export const Home = () => {
  return (
    <div>
      <Banner />
      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <PostCards />
        <Category />
      </div>
    </div>
  );
};
