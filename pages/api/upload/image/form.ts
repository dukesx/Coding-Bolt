const formidable = require("formidable");
const fs = require("fs");
const form = formidable();
const axios = require("axios").default;
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  20
);

export default async function (req, res) {
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      var buffer = fs.readFileSync(files.image.path);
      var nameLength = files.image.name.split(".").length;
      var name = nanoid() + "." + files.image.name.split(".")[nameLength - 1];

      axios
        .put(
          `https://storage.bunnycdn.com/thrive-assets/assets/${name}`,
          buffer,
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
                url: `${name}`,
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

export const config = {
  api: {
    bodyParser: false,
  },
};
