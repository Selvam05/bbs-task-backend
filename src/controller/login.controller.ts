import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoginDTO } from 'src/dto/login.dto';
import { LoginService } from "src/services/login.service";


@Controller('/api')
export class LoginController {
    constructor(private readonly loginService: LoginService) { }
    @Post("auth")
    findUser(@Body() loginDTO: LoginDTO): Promise<any> {
        return this.loginService.findUser(loginDTO);
    }

}