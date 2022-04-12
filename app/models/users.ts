import { db } from "./db";

export async function getUsers() {
  await db.$connect();
  const allUsers = await db.users.findMany();
  db.$disconnect();
  return allUsers;
}
