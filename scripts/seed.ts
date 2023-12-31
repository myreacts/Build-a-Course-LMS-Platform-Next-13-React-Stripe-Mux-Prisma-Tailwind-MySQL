const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

export async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "Photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
      ],
    });
    console.log("Success");
  } catch (error) {
    await database.$disconnect();
  }
}

main();
