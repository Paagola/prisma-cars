import { prisma } from '../../config/db.js'

export async function createCar(
    data: { 
        model: string;
        color: string;
        km: number;
        userId?: number;
    }) {
        return prisma.car.create({data});
    }

export async function listCars() {
    return prisma.car.findMany({
        orderBy: {id: 'asc'}
    })
}

export async function updateCar(
    id: number,
    data: {
        model?: string;
        color?: string;
        km?: number;
    }
) {
    return prisma.car.update({ where: { id }, data})
}

export async function deleteCar(id: number) {
    return prisma.car.delete({ where: { id }});
}

export async function findCarById(id: number) {
    return prisma.car.findUnique({where: {id}});
}