import { Registration } from "src/entity/Registration";

export class RegistrationDTO {
    regId?: number;
    name?: string;
    email?: string;
    password?: string;
    gender?: string;
    category?: string;

    setProperties(registration: Registration) {
        this.category = registration.category;
        this.email = registration.email;
        this.gender = registration.gender;
        this.name = registration.name;
        this.password = registration.password;
        this.regId = registration.regId;
    }
}