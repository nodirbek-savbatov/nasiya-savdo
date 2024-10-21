import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { IsPhoneNumber } from "src/common/decorator/IsPhoneNumber";

export class CreateAdminDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    username: string;


    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password: string


   @IsPhoneNumber()
    phone_namber: string


}
