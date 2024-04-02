import publicAxios from "../../../components/publicAxios";

//old : when there is no search filter
// export const getBlogs = async () => {
//   const response = await publicAxios.get("/blogs");
//   return response.data;
// };

//Updated: using search and tags filter will call the api
export const getBlogs = async (tags, search) => {
  let querryString = tags.length ? `tags_like=${tags.join(",")}` : "";
  if (search !== "") {
    querryString += `${querryString ? "&" : ""}q=${search}`;
    console.log(querryString);
  }

  try {
    console.log(`/blogs/?${querryString}`);
    const response = await publicAxios.get(`/blogs/?${querryString}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
