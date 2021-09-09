/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
const formidable = require("formidable");
const fs = require("fs");
const form = formidable();
import axios from "axios";
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
        .post("http://localhost:3000/api/placeholder/encode", {
          path: files.image.path,
        })
        .then(function (response1) {
          axios
            .put(`https://${process.env.BUCKET_URL}/${name}`, buffer, {
              headers: {
                AccessKey: process.env.BUCKET_KEY,
              },
            })
            .then(function (response2) {
              if (!res.headersSent) {
                res.json({
                  success: 1,
                  file: {
                    url: `https://${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-400x/${name}`,
                    hash: response1.data.hash,
                  },
                });
              }
            })
            .catch(function (err) {
              console.log(err);
            });
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
