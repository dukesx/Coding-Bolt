import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_API,
});
export default function returnUnsplash(req, res) {
  const { search } = req.body;
  return new Promise((resolve, reject) => {
    unsplash.search
      .getPhotos({
        query: search,
        perPage: 20,
        page: 1,
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log("error occurred: ", result.errors[0]);
        } else {
          if (!res.headersSent) {
            res.json(result.response);
          }
        }
      });
  });
}
