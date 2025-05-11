import { PrismaClient } from '../../generated/prisma';
import { IUser, IUserResponse } from '../../types/types';

export class UserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<IUserResponse[]> {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        login: true,
      },
    });
    return users;
  }

  async getById(id: string): Promise<IUserResponse | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        login: true,
      },
    });
    return user;
  }

  async create(userData: Omit<IUser, 'id'>): Promise<IUserResponse> {
    const user = await this.prisma.user.create({
      data: userData,
      select: {
        id: true,
        name: true,
        login: true,
      },
    });
    return user;
  }

  async update(id: string, userData: Partial<IUser>): Promise<IUserResponse | null> {
    const user = await this.prisma.user.update({
      where: { id },
      data: userData,
      select: {
        id: true,
        name: true,
        login: true,
      },
    });
    return user;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.user.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
} 