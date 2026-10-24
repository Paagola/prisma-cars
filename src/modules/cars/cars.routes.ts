import { Router } from 'express';
import { validate } from '../../middleware/validate.js';
import { createCarSchema, updateCarSchema } from './cars.schema.js';
import {
  createCarCtrl,
  listCarsCtrl,
  getCarCtrl,
  updateCarCtrl,
  deleteCarCtrl,
} from './cars.controller.js';

const router = Router();

router.get('/', listCarsCtrl);
router.get('/:id', getCarCtrl);
router.post('/', validate(createCarSchema), createCarCtrl);
router.patch('/:id', validate(updateCarSchema), updateCarCtrl);
router.delete('/:id', deleteCarCtrl);

export default router;