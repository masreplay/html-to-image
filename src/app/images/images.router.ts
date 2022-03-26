import { Router } from 'express';
import * as imagesController from './images.controller';

const router = Router();
const path = '/image';

router.post('', imagesController.getImageFromHTML);

export { router, path };
