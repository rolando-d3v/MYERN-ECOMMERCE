import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { Role } from "../interfaces";

const prisma = new PrismaClient();

//OBTIENE ALL REGISTRO
//********************************/
export const getRole: RequestHandler = async (req, res) => {
  try {
    const role = await prisma.role.findMany({});

    // const user = await prisma.user.findMany({
    //   select: {
    //     email: true,
    //     name: true,
    //   },
    // });

    return res.json(role);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

//CREATE ONE REGISTRO
//********************************/

export const createRole = async (req: Request, res: Response) => {
  const role: Role = req.body;

  try {
    await prisma.role.create({
      data: {
        name: role.name,
      },
    });

    return res.json({ msn: "Post created success 😃 ✔️" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

//DELETED ONE USER
//********************************/
export const deleteRole = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    //si existe el id del registro
    let idx = Number(req.params.id);
    const proId = await prisma.post.findUnique({
      where: { id: idx },
    });
    if (!proId) {
      return res.status(400).json({ msn: "Registro not found ❗️" });
    }

    // deleted un registro
    const post = await prisma.post.delete({
      where: { id: idx },
    });
    return res.json({ msn: "Registro deleted success  ✔️", post });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

//UPDATED ONE USER
//********************************/
export const updatedRole = async (req: Request, res: Response) => {
  try {
    //si existe el id del registro
    let idx = Number(req.params.id);
    const proId = await prisma.role.findUnique({
      where: { id: idx },
    });
    if (!proId) {
      return res.status(400).json({ msn: "Post not found ❗️" });
    }

    const role: Role = req.body;

    // deleted un registro
    const postData = await prisma.role.update({
      where: { id: idx },
      data: {
        name: role.name,
      },
    });
    return res.json({ msn: "Product updated success  ✔️", postData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
