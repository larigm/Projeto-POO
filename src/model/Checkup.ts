import Treatment from "./Treatment";

export default class Checkup extends Treatment{
    constructor(date: number, doctor: string){
        super(date, doctor)
    }
}