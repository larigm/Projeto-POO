import Treatment from "./Treatment";

export default class Surgery extends Treatment{
    time: number;

    constructor(date: number, doctor: string, time: number){
        super(date, doctor)
    }
}