import { Router } from 'express';
import * as images from './app/images/images.router';

const router = Router();

router.get(images.path, images.router);

export default router;
