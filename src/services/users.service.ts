import prisma from "../prisma/client";
import { User } from "../types/user";

export const usersService = {
  async getUsers(filters: {
    search?: string;
    role?: "admin" | "editor" | "viewer";
    sort?: "name";
  }): Promise<User[]> {
    const where: any = {};

    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: "insensitive" } },
        { email: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    if (filters.role) {
      where.role = filters.role;
    }

    const orderBy: any = {};
    if (filters.sort === "name") {
      orderBy.name = "asc";
    } else {
      orderBy.createdAt = "desc";
    }

    return prisma.user.findMany({
      where,
      orderBy,
    });
  },

  async getUserById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  },

  async toggleActive(id: string): Promise<User> {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return prisma.user.update({
      where: { id },
      data: { active: !user.active },
    });
  },
};

export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}
