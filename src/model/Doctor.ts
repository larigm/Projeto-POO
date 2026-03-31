import People from "./People";

export default class Doctor extends People{
    crm: number;
    specialty: string;

    constructor(name: string, cpf: number, crm: number, specialty: string){
        super(name, cpf)
    }
}