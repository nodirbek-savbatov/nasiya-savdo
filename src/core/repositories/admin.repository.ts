import { Repository } from "typeorm";
import { AdminEntity } from "../entities/admin.entites";

export type AdminRepository = Repository<AdminEntity>;