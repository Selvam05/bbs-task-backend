import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Registration } from "src/entity/Registration";
import { Repository } from 'typeorm';


@Injectable()
export class LoginService {

    constructor(@InjectRepository(Registration) private readonly userRepository: Repository<Registration>) { }
    async findUser(loginDTO) {
        const registration: Registration = await this.userRepository.findOne({ where: { email: loginDTO.email, password: loginDTO.password } });
        if (!registration) {
            return null;
        } else {
            return registration;
        }
    }

}