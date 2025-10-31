import { ApiProperty} from "@nestjs/swagger";
import {User, UserRole} from "../entities/user.entity";
export class CreateUserDto {
    @ApiProperty()
    name:string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    password:string;

    @ApiProperty({enum:UserRole,default:UserRole.CLIENT})
    role:UserRole;
}
