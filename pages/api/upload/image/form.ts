/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
const formidable = require("formidable");
const fs = require("fs");
const form = formidable();
const axios = require("axios").default;
import { customAlphabet } from "nanoid";

//
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  10
);
//

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);

      var buffer = fs.readFileSync(files.image.path);
      var nameLength = files.image.name.split(".").length;
      var name = nanoid() + "." + files.image.name.split(".")[nameLength - 1];

      axios
        .put(`${process.env.BUCKET_URL}/${name}`, buffer, {
          headers: {
            AccessKey: process.env.BUCKET_KEY,
          },
        })
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
};

export const config = {
  api: {
    bodyParser: false,
  },
};
