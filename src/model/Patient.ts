import People from "./People";

export default class Patient extends People{
    status: string
    constructor(name: string, cpf: number, status: string){
        super(name, cpf)
    }
    statusPatient(newStatus: string): void{
        this.status = newStatus
    }
}