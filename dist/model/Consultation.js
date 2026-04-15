"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StatusPatient_1 = require("./StatusPatient");
class Treatment {
    constructor(date, doctor, patient) {
        this.date = date;
        this.doctor = doctor;
        this.patient = patient;
        this.patient.updateStatus(StatusPatient_1.StatusPatient.Atendimento);
    }
}
exports.default = Treatment;
