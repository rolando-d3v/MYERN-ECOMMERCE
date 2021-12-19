import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createdSetupRoles = async () => {
  try {
    //funtion what count roles si mas de cero en la base de datos y si hay hace return
    const count = await prisma.role.count();
    if (count > 0) return;

    // Promise.all es para ejecutar todo un conjunto de  promesas que necesitan await
    const values = await prisma.role.createMany({
      data: [
        {
          name: "user",
        },
        {
          name: "admin",
        },
        {
          name: "ejecutor",
        },
      ],
    });
    console.log(values);
  } catch (err) {
    console.log(err);
  }
};

