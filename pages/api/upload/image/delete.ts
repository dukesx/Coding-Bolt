/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios");
const path = require("path");
export default function (req, res) {
  const { name } = req.body;

  return new Promise((resolve, reject) => {
    axios
      .delete(`${process.env.BUCKET_URL}/${name}`, {
        headers: {
          AccessKey: process.env.BUCKET_KEY,
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
