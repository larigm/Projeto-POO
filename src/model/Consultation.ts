import { StatusPatient } from "./StatusPatient";
import Doctor from "./Doctor";
import Patient from "./Patient";

export default class Treatment {
  public date: string;
  public doctor: Doctor;
  public patient: Patient;

  constructor(date: string, doctor: Doctor, patient: Patient) {
    this.date = date;
    this.doctor = doctor;
    this.patient = patient;
    this.patient.updateStatus(StatusPatient.Atendimento);
  }
}