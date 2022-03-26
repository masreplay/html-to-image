import { Router } from 'express';
import htmlToImage from './htmlToImage';
import s3 from './s3';
import { v4 as uuid } from 'uuid';
import { BUCKET } from './utils/config';

const router = Router();

router.post('/image', async (req: any, res: any) => {
  const imageBuffer = await htmlToImage(req.body.html);

  const id: string = uuid();

  const s3File: any = await s3.putObject({
    bucket: BUCKET,
    key: id,
    body: imageBuffer,
    contentType: 'image/png',
  });

  res.json({ url: s3File.url });
});

export default router;
