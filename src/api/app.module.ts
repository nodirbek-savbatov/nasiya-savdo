import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "src/config";
import { AdminModule } from './admin/admin.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: config.DB_HOST,
            port: config.DB_PORT,
            username: config.DB_USER,
            database: config.DB_NAME,
            password: config.DB_PASS,
            synchronize: true,
            entities: ["dist/core/entities/*.entities{.ts,.js}"],

        }),
        AdminModule
    ]
})

export class AppModule{}