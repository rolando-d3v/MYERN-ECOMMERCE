import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import config from "../../config";

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    //authentication email user
    const userData = await prisma.user.findUnique({ where: { email: email } });
    if (!userData) return res.status(404).json({ msn: "email not found" });

    //authentication password user
    const userPass = await bcrypt.compare(password, userData.password);
    if (!userPass) return res.status(400).json({ msn: "Password not correct" });

    const userToken = jwt.sign(
      { id: userData.id, roles: userData.name, emai: userData.email },
      config.secret,
      { expiresIn: "5h" }
    );

    return res.json({ ok: true, userToken });
  } catch (err) {
    return console.log({ msn: "Error server", err });
  }
};
