import prisma from './_base';

export default async function gen(req, res) {
  const body = req.body;
  console.log(body);
  try {
    const newUser = await prisma.users.create({
      data: {
        auth: body.auth,
        name: body.name,
        username: body.username,
        email: body.email,
        rand_id: body.rand_id,
      },
    });
    res.status(200).json({
      success: 1,
    });
  } catch (err) {
    console.log(err);
    if (err) {
      res.status(500).json({
        success: 0,
      });
    }
  }
}
