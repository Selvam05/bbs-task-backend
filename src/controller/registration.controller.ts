import { Body, Controller, Get, Post } from "@nestjs/common";
import { RegistrationDTO } from "src/dto/registration.dto";
import { Registration } from "src/entity/Registration";
import { RegistrationService } from "src/services/registration.service";


@Controller('/api')
export class RegistrationController {
    constructor(private readonly registrationService: RegistrationService) { }

    @Post("saveRegister")
    create(@Body() registrationDTO: RegistrationDTO): Promise<Registration> {
        return this.registrationService.create(registrationDTO);
    }

    @Get("findAll")
    getUser(): Promise<Registration[]> {
        return this.registrationService.findAll();
    }

}
