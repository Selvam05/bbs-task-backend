import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginController } from "src/controller/login.controller";
import { Registration } from "src/entity/Registration";
import { LoginService } from "src/services/login.service";

@Module({
    imports: [TypeOrmModule.forFeature([Registration])],
    providers: [LoginService],
    controllers: [LoginController],
})

export class LoginModule { }