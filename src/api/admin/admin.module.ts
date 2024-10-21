import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from 'src/core/entities/admin.entites';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity]),JwtModule.register({global: true})],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
