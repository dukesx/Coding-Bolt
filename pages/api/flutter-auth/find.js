import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function gen(req, res) {
    const body = req.body;
    console.log(body);
    try {
        const foundUser = await prisma.users.findFirst({
            where: {
                rand_id: body.rand_id
            }
        });

        if (foundUser) {
            return res.status(200).json({
                success: 1,
                user: foundUser.name,
            });
        }
        else {
            return res.status(500).json({
                success: 0
            });

        }
    }
    catch (err) {
        console.log(err);
        if (err) {
            res.status(500).json({
                success: 0
            });
        }
    }

}