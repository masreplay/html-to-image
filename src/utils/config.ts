import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});



export const PORT = process.env.PORT || 3000;

export const SECRET_KEY = process.env.SECRET_KEY;
export const API_PREFIX = process.env.API_PREFIX as string;
export const ACCESS_KEY_ID = process.env.ACCESS_KEY_ID as string;
export const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY as string;
export const REGION = process.env.REGION as string;
export const NODE_ENV = process.env.NODE_ENV as string;
export const BUCKET = process.env.BUCKET as string;