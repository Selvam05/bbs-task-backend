import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { Registration } from "src/entity/Registration";
import { RegistrationDTO } from "src/dto/registration.dto";


@Injectable()
export class RegistrationService {

    constructor(
        @InjectRepository(Registration) private readonly registrationRepository: Repository<Registration>) { }
        
    async create(registrationDTO: RegistrationDTO): Promise<Registration> {
        const registration = new Registration();
        registration.setProperties(registrationDTO);
        return await this.registrationRepository.save(registrationDTO);
    }
    async findAll():Promise<Registration[]>{
        return this.registrationRepository.find()
    }
}
