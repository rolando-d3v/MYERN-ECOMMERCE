import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { Product } from "../interfaces";

const prisma = new PrismaClient();

//OBTIENE ALL REGISTRO
//********************************/
export const getProducts: RequestHandler = async (req, res) => {
  try {
    const pro = await prisma.product.findMany({});

    // const user = await prisma.user.findMany({
    //   select: {
    //     email: true,
    //     name: true,
    //   },
    // });

    return res.json(pro);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

//CREATE ONE REGISTRO
//********************************/
export const createProduct = async (req: Request, res: Response) => {
  const pro: Product = req.body;

  try {
    await prisma.product.create({
      data: {
        title: pro.title,
        description: pro.description,
        precio: Number(pro.precio),
        ativo: pro.activo,
        stock: pro.stock,
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
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    //si existe el id del registro
    let idx = Number(req.params.id);
    const proId = await prisma.product.findUnique({
      where: { id: idx },
    });
    if (!proId) {
      return res.status(400).json({ msn: "Registro not found ❗️" });
    }

    // deleted un registro
    const product = await prisma.product.delete({
      where: { id: idx },
    });
    return res.json({ msn: "Registro deleted success  ✔️", product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};

export const updatedProduct = async (req: Request, res: Response) => {
  try {
    //si existe el id del registro
    let idx = Number(req.params.id);
    const proId = await prisma.product.findUnique({
      where: { id: idx },
    });
    if (!proId) {
      return res.status(400).json({ msn: "Registro not found ❗️" });
    }

    const pro: Product = req.body;

    // deleted un registro
    const product = await prisma.product.update({
      where: { id: idx },
      data: {
        title: pro.title,
        description: pro.description,
        precio: pro.precio,
        ativo: pro.activo,
      },
    });
    return res.json({ msn: "Product updated success  ✔️", product });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
