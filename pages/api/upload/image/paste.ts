/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios").default;
const fs = require("fs");
const path = require("path");
import { customAlphabet } from "nanoid";
//
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  10
);
//
export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    axios
      .get(req.body.url, {
        responseType: "arraybuffer",
      })
      .then((response) => {
        var buff = Buffer.from(response.data, "binary");
        var fileName =
          nanoid() + "." + path.basename(response.request.path).split(".")[1];

        console.log(response);
        axios
          .put(`https://${process.env.BUCKET_URL}/${fileName}`, buff, {
            headers: {
              AccessKey: process.env.BUCKET_KEY,
            },
          })
          .then(function (response) {
            if (!res.headersSent) {
              res.json({
                success: 1,
                file: {
                  url: `${process.env.IMAGE_CDN_PATH}/tr:n-400x/${fileName}`,
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
