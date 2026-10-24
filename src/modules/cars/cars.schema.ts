import { z } from 'zod';

export const createCarSchema = z.object({
    model: z.string().min(2, 'El modelo debe tener al menos 2 caracteres.'),
    color: z.string().min(2, 'El color debe tener como mínimo dos catecteres.'),
    km: z.number('debe ser un número').int().positive('debe ser positivo'),
    userId: z.number('debe ser un número').int().positive('debe ser positivo'),
})  

export const updateCarSchema = z.object({
    model: z.string().min(2, 'El modelo debe tener al menos 2 caracteres.').optional(),
    color: z.string().min(2, 'El color debe tener como mínimo dos catecteres.').optional(),
    km: z.number('debe ser un número').int().positive('debe ser positivo').optional(),
})

export type CreateCarInput = z.infer<typeof createCarSchema>;
export type UpdateClientInput = z.infer<typeof updateCarSchema>;