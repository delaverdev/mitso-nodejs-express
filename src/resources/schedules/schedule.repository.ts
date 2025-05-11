import { PrismaClient } from '../../generated/prisma';
import { ISchedule, IScheduleResponse } from '../../types/types';

export class ScheduleRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAll(): Promise<IScheduleResponse[]> {
    const schedules = await this.prisma.schedule.findMany({
      select: {
        id: true,
        tourId: true,
        date: true,
        time: true,
      },
    });
    return schedules;
  }

  async getById(id: string): Promise<IScheduleResponse | null> {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
      select: {
        id: true,
        tourId: true,
        date: true,
        time: true,
      },
    });
    return schedule;
  }

  async getByTourId(tourId: string): Promise<IScheduleResponse[]> {
    const schedules = await this.prisma.schedule.findMany({
      where: { tourId },
      select: {
        id: true,
        tourId: true,
        date: true,
        time: true,
      },
    });
    return schedules;
  }

  async create(scheduleData: Omit<ISchedule, 'id'>): Promise<IScheduleResponse> {
    const schedule = await this.prisma.schedule.create({
      data: scheduleData,
      select: {
        id: true,
        tourId: true,
        date: true,
        time: true,
      },
    });
    return schedule;
  }

  async update(id: string, scheduleData: Partial<ISchedule>): Promise<IScheduleResponse | null> {
    const schedule = await this.prisma.schedule.update({
      where: { id },
      data: scheduleData,
      select: {
        id: true,
        tourId: true,
        date: true,
        time: true,
      },
    });
    return schedule;
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.prisma.schedule.delete({
        where: { id },
      });
      return true;
    } catch {
      return false;
    }
  }
} 