import * as dotenv from "dotenv"
dotenv.config();


export type ConfigType = {
    PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME: string;
}

export const config: ConfigType = {
    PORT: Number(process.env.PORT) as number,
    DB_HOST: process.env.DB_HOST as string,
    DB_NAME: process.env.DB_NAME as string,
    DB_PASS: process.env.DB_PASSWORD as string,
    DB_PORT: Number(process.env.DB_PORT) as number,
    DB_USER: process.env.DB_USERNAME as string,
}