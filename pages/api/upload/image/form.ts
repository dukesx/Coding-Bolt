/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
const form = formidable();
import axios, { AxiosResponse } from "axios";
import { customAlphabet } from "nanoid";

//
const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  10
);
//

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise((resolve, reject) => {
    form.parse(
      req,
      (err: any, fields: any, files: { image: any; file: any; files: any }) => {
        if (err) return reject(err);
        var imageSetting = files.image
          ? files.image
          : files.file
          ? files.file
          : files.files;
        console.log(imageSetting);
        console.log(files.image);
        var buffer = fs.readFileSync(imageSetting.path);
        var nameLength = imageSetting.name.split(".").length;
        var name =
          nanoid() + "." + imageSetting.name.split(".")[nameLength - 1];
        axios
          .post("http://localhost:3000/api/placeholder/encode", {
            path: imageSetting.path,
          })
          .then(function (response1: AxiosResponse) {
            axios
              .put(`https://${process.env.BUCKET_URL}/${name}`, buffer, {
                headers: {
                  AccessKey: process.env.BUCKET_KEY,
                },
              })
              .then(function (response2: AxiosResponse) {
                if (!res.headersSent) {
                  res.json({
                    success: 1,
                    file: {
                      url: `https://${process.env.NEXT_PUBLIC_IMAGE_CDN_PATH}/tr:n-400x/${name}`,
                      //@ts-ignore
                      hash: response1.data.hash,
                    },
                  });
                }
              })
              .catch(function (err: string) {
                console.log(err);
              });
          })
          .catch(function (err: string) {
            console.log(err);
          });
      }
    );
  });
};

export const config = {
  api: {
    bodyParser: false,
  },
};
