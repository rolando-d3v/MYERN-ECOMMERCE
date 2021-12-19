import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";
import { Post } from "../interfaces";

const prisma = new PrismaClient();

//OBTIENE ALL REGISTRO
//********************************/
export const getPost: RequestHandler = async (req, res) => {
  try {
    const post = await prisma.post.findMany({});

    // const user = await prisma.user.findMany({
    //   select: {
    //     email: true,
    //     name: true,
    //   },
    // });

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
  }
};

//CREATE ONE REGISTRO
//********************************/
export const createPost = async (req: Request, res: Response) => {
  const post: Post = req.body;

  try {
    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        published: post.published,
        authorId: post.authorId,
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
export const deletePost = async (
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
export const updatedPost = async (req: Request, res: Response) => {
  try {
    //si existe el id del registro
    let idx = Number(req.params.id);
    const proId = await prisma.post.findUnique({
      where: { id: idx },
    });
    if (!proId) {
      return res.status(400).json({ msn: "Post not found ❗️" });
    }

    const post: Post = req.body;

    // deleted un registro
    const postData = await prisma.post.update({
      where: { id: idx },
      data: {
        title: post.title,
        content: post.content,
        published: post.published,
        authorId: post.authorId,
      },
    });
    return res.json({ msn: "Product updated success  ✔️", postData });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msn: "Error: server 😕 ❗️❗️", err });
  }
};
