import { PrismaClient } from '../../generated/prisma';
import { ITour, ITourResponse } from '../../types/types';

export class TourRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<ITourResponse[]> {
    const tours = await this.prisma.tour.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return tours;
  }

  async getById(id: string): Promise<ITourResponse | null> {
    const tour = await this.prisma.tour.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return tour;
  }

  async create(tourData: Omit<ITour, 'id'>): Promise<ITourResponse> {
    const tour = await this.prisma.tour.create({
      data: tourData,
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return tour;
  }

  async update(id: string, tourData: Partial<ITour>): Promise<ITourResponse | null> {
    const tour = await this.prisma.tour.update({
      where: { id },
      data: tourData,
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    return tour;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.tour.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
} 