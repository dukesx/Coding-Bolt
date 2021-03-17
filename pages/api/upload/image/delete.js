import Axios from "axios";

const axios = require("axios");
const path = require("path");
export default function (req, res) {
  const { name } = req.body;
  // const name = path.basename(url);
  console.log(name);
  return new Promise((resolve, reject) => {
    axios
      .delete(`https://storage.bunnycdn.com/thrive-assets/assets/${name}`, {
        headers: {
          AccessKey: "f7d08962-9919-4195-bf1cda8291ef-7898-4007",
        },
      })
      .then((reso) => {
        res.send(
          JSON.stringify({
            response: "deleted",
          })
        );
      })
      .catch((err) => {
        console.log(err);
        res.statusCode = 500;
        res.send(
          JSON.stringify({
            response: "error",
          })
        );
      });
  });
}
