import type { Request, Response } from 'express';
import { createCar, listCars, findCarById, updateCar, deleteCar } from './cars.service.js';

export async function createCarCtrl(req: Request, res: Response) {
  try {
    const car = await createCar(req.body);
    res.status(201).json(car);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ message: 'El email ya está en uso' });
    }
    res.status(500).json({ message: error.message });
  }
}

export async function listCarsCtrl(_req: Request, res: Response) {
  try {
    const cars = await listCars();
    res.json(cars);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCarCtrl(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const car = await findCarById(id);
    if (!car) {
      return res.status(404).json({ message: 'Coche no encontrado' });
    }

    res.json(car);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateCarCtrl(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    const car = await updateCar(id, req.body);
    res.json(car);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Coche no encontrado' });
    }
    res.status(500).json({ message: error.message });
  }
}

export async function deleteCarCtrl(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: 'ID inválido' });
    }

    await deleteCar(id);
    res.status(204).send();
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ message: 'Coche no encontrado' });
    }
    res.status(500).json({ message: error.message });
  }
}
