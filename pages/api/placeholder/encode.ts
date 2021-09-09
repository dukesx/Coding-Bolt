/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { path } = req.body;
  const encodeImageToBase64 = (path) =>
    new Promise((resolve, reject) => {
      sharp(path)
        .ensureAlpha()
        .resize(32, 32, { fit: "inside" })
        .toBuffer((err, buffer, { width, height, format }) => {
          if (err) return reject(err);
          resolve(`data:image/${format};base64,${buffer.toString("base64")}`);
        });
    });

  encodeImageToBase64(path).then((hash) => {
    if (!res.headersSent) {
      return res.json({
        hash: hash,
      });
    }
  });
};
