import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
 
export  enum UserRole{
    ADMIN='admin',
    LAWYER='lawyer',
    CLIENT='client'
}
@Schema({timestamps:true})

export class User  extends Document{
@Prop({required:true})
name:string;

@Prop({required:true,unique:true})
email:string;

@Prop({required:true})
password:string;

@Prop({required:true,enum:UserRole,default:UserRole.CLIENT})
role:UserRole;

}
export const UserSchema=SchemaFactory.createForClass(User);
