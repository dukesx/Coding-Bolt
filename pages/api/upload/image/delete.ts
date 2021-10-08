/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosResponse } from "axios";
export default function (req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  return new Promise((resolve, reject) => {
    axios
      .delete(`https://${process.env.BUCKET_URL}/${name}`, {
        headers: {
          AccessKey: process.env.BUCKET_KEY,
        },
      })
      .then((reso: AxiosResponse) => {
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
