import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RegistrationController } from "src/controller/registration.controller";
import { Registration } from "src/entity/Registration";
import { RegistrationService } from "src/services/registration.service";

@Module({
    imports: [TypeOrmModule.forFeature([Registration])],
    providers: [RegistrationService],
    controllers: [RegistrationController],
})

export class RegistrationModule { }