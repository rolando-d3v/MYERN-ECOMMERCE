import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { User } from "../interfaces";

const prisma = new PrismaClient();

//OBTIENE ALL REGISTRO
//********************************/
export const getUsers: RequestHandler = async (req, res) => {
  try {
    const user = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
      },
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

//CREATE ONE REGISTRO
//********************************/
export const createUser = async (req: Request, res: Response) => {
  // const userx: User = req.body

  const userx = req.body as User;

  try {
    const user = await prisma.user.create({
      data: {
        name: userx.name,
        email: userx.email,
        dni: Number(userx.dni),
        apellido: userx.apellido,
        password: await bcrypt.hash(userx.password, 10),
      },
    });

    return res.json({ msn: "Registro created success 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};



//DELETED ONE USER
//********************************/
export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    //si existe el id del registro
    let idx = Number(req.params.id);
    const userId = await prisma.user.findUnique({
      where: { id: idx },
    });
    if (!userId) {
      return res.status(400).json({ msn: "Registro not found ❗️" });
    }

    // deleted un registro
    const user = await prisma.user.delete({
      where: { id: idx },
    });
    return res.json({ msn: "Registro deleted success  ✔️", user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
