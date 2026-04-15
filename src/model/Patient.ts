import People from "./People";
import { StatusPatient } from "./StatusPatient";

export default class Patient extends People {
  public description: string;
  public status: StatusPatient; 

  constructor(name: string, cpf: number, description: string, status: StatusPatient) {
    super(name, cpf);
    this.status = StatusPatient.Aguardando;
    this.description = description;
  }

  // Método pra mudar status
  public updateStatus(newStatus: StatusPatient): void{
    this.status = newStatus;
  }
}
