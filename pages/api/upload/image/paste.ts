const axios = require("axios").default;
const fs = require("fs");
const path = require("path");
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  20
);
export default async function (req, res) {
  return new Promise((resolve, reject) => {
    axios
      .get(req.body.url, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        var buff = Buffer.from(response.data, "binary");
        // var fileName = path.basename(response.request.path);
        var fileName =
          nanoid() + "." + path.basename(response.request.path).split(".")[1];

        console.log(response);
        axios
          .put(
            `https://storage.bunnycdn.com/thrive-assets/assets/${fileName}`,
            buff,
            {
              headers: {
                AccessKey: "f7d08962-9919-4195-bf1cda8291ef-7898-4007",
              },
            }
          )
          .then(function (response) {
            if (!res.headersSent) {
              res.json({
                success: 1,
                file: {
                  url: `https://ik.imagekit.io/pthrive/assets/tr:n-400x/${fileName}`,
                },
              });
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      });
  });
}
