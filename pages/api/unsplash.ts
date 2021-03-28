import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'Vt0VxMbESEtFa_IAqJmkGWObMbzKiwODqhKd8c6kf80'
});
export default function (req, res) {
  const { search } = req.body;
  return new Promise((resolve, reject) => {
    unsplash.search
      .getPhotos({
        query: search,
        perPage: 20,
        page: 1
      })
      .then((result) => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          if (!res.headersSent) {
            res.json(result.response);
          }
        }
      });
  });
}
