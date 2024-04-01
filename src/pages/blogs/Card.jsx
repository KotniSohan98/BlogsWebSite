import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ blog }) => {
  //   console.log(blog);
  const {
    id,
    title,
    image,
    category,
    author,
    authorPic,
    published_date,
    reading_time,
    content,
    tags,
  } = blog;
  return (
    <Link to={`/blogs/${id}`} className="block rounded w-full lg:flex mb-10">
      <div
        className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
        style={{
          backgroundImage: `url(${image})`,
        }}
        title="deit is very important"
      ></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="text-gray-700 font-bold text-2xl mb-2 mt-3 md:mt-0">
            {title}
          </div>
          <p className="text-gray-700 text-base">{content}</p>
          <p className="text-gray-700 text-sm italic">
            Tags:{" "}
            {tags.map((tag, index) => (
              <span key={index} className="mx-1 underline">
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div className="flex mt-3">
          <img
            src={authorPic}
            alt="Author"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div className="ml-2">
            <p className="font-semibold text-gray-700 text-sm capitalize">
              {author}
            </p>
            <p className="text-gray-600 text-xs">{published_date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
