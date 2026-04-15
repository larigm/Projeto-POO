import People from "./People";
import { Specialty } from "./Specialty";
export default class Doctor extends People {
  private crm: number;
  private specialty: Specialty;

  constructor(name: string, cpf: number, crm: number, specialty: Specialty) {
    super(name, cpf);
    this.specialty = specialty;
    this.crm = crm;
  }
  public getCrm(): number {
    return this.crm;
  }
  public setCrm(newCrm: number): void {
    this.crm = newCrm;
  }
}
