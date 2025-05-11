import { PrismaClient } from '../../generated/prisma';
import { IPrice, IPriceResponse } from '../../types/types';

export class PriceRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<IPriceResponse[]> {
    const prices = await this.prisma.price.findMany({
      select: {
        id: true,
        scheduleId: true,
        price: true,
        currency: true,
      },
    });
    return prices;
  }

  async getById(id: string): Promise<IPriceResponse | null> {
    const price = await this.prisma.price.findUnique({
      where: { id },
      select: {
        id: true,
        scheduleId: true,
        price: true,
        currency: true,
      },
    });
    return price;
  }

  async getByScheduleId(scheduleId: string): Promise<IPriceResponse[]> {
    const prices = await this.prisma.price.findMany({
      where: { scheduleId },
      select: {
        id: true,
        scheduleId: true,
        price: true,
        currency: true,
      },
    });
    return prices;
  }

  async create(priceData: Omit<IPrice, 'id'>): Promise<IPriceResponse> {
    const price = await this.prisma.price.create({
      data: priceData,
      select: {
        id: true,
        scheduleId: true,
        price: true,
        currency: true,
      },
    });
    return price;
  }

  async update(id: string, priceData: Partial<IPrice>): Promise<IPriceResponse | null> {
    const price = await this.prisma.price.update({
      where: { id },
      data: priceData,
      select: {
        id: true,
        scheduleId: true,
        price: true,
        currency: true,
      },
    });
    return price;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.price.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
} 