import { z } from 'zod';

export const createCarSchema = z.object({
  model: z.string().min(2, 'El modelo debe tener al menos 2 caracteres'),
  color: z.string().min(2, 'El color debe tener al menos 2 caracteres'),
  km: z.number('km debe ser un número').int().nonnegative('km no puede ser negativo'),
  userId: z.number('userId debe ser un número').int().positive('userId debe ser positivo'),
});

export const updateCarSchema = z.object({
    model: z.string().min(2, 'El modelo debe tener al menos 2 caracteres.').optional(),
    color: z.string().min(2, 'El color debe tener como mínimo dos catecteres.').optional(),
    km: z.number('debe ser un número').int().positive('debe ser positivo').optional(),
})

export type CreateCarInput = z.infer<typeof createCarSchema>;
export type UpdateCarInput = z.infer<typeof updateCarSchema>;