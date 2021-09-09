/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from "next";
import sharp from "sharp";
import { encode } from "blurhash";
export default (req: NextApiRequest, res: NextApiResponse) => {
  // const loadImage = async (src) =>
  //   new Promise((resolve, reject) => {
  //     const img = new Image();
  //     img.onload = () => resolve(img);
  //     img.onerror = (...args) => reject(args);
  //     img.src = src;
  //   });

  // const getImageData = (image) => {
  //   const canvas = document.createElement("canvas");
  //   canvas.width = image.width;
  //   canvas.height = image.height;
  //   const context = canvas.getContext("2d");
  //   context.drawImage(image, 0, 0);
  //   return context.getImageData(0, 0, image.width, image.height);
  // };

  // const encodeImageToBlurhash = async (imageUrl) => {
  //   const image = await loadImage(imageUrl);
  //   const imageData = getImageData(image);
  //   return encode(imageData.data, imageData.width, imageData.height, 4, 4);
  // };
  const { path } = req.body;
  const encodeImageToBlurhash = (path) =>
    new Promise((resolve, reject) => {
      sharp(path)
        // .raw()
        .ensureAlpha()
        .resize(32, 32, { fit: "inside" })
        .toBuffer((err, buffer, { width, height, format }) => {
          if (err) return reject(err);
          // resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
          resolve(`data:image/${format};base64,${buffer.toString("base64")}`);
        });
    });

  encodeImageToBlurhash(path).then((hash) => {
    if (!res.headersSent) {
      return res.json({
        hash: hash,
      });
    }
  });
};
