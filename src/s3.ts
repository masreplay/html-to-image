import * as AWS from 'aws-sdk';

import { ACCESS_KEY_ID, SECRET_ACCESS_KEY, REGION } from './utils/config';


AWS.config.update({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
});

const s3 = new AWS.S3();

export default {
  putObject(options: any = {}) {
    return new Promise((resolve, reject) => {
      s3.putObject(
        {
          Bucket: options.bucket,
          ACL: options.acl || 'public-read',
          Key: options.key,
          Body: options.body,
          ContentType: options.contentType,
        },
        (error) => {
          if (error) {
            console.warn('[s3] Upload Error: ', error);
            reject(error);
          } else {
            resolve({
              url: `https://${options.bucket}.s3.amazonaws.com/${options.key}`,
              name: options.key,
              type: options.contentType || 'application/',
            });
          }
        }
      );
    });
  },
};