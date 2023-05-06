import { RegistrationDTO } from "src/dto/registration.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("registration", { schema: "user" })
export class Registration {
  @PrimaryGeneratedColumn({ type: "int", name: "regId" })
  public regId: number;

  @Column("varchar", { name: "name", nullable: true, length: 255 })
  public name: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 255 })
  public email: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 255 })
  public password: string | null;

  @Column("varchar", { name: "gender", nullable: true, length: 255 })
  public gender: string | null;

  @Column("varchar", { name: "category", nullable: true, length: 255 })
  public category: string | null;

  setProperties(registration: RegistrationDTO) {
    this.category = registration.category;
    this.email = registration.email;
    this.gender = registration.gender;
    this.name = registration.name;
    this.password = registration.password;
    this.regId = registration.regId;
}
}
