"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
class Doctor extends People_1.default {
    constructor(name, cpf, crm, specialty) {
        super(name, cpf);
        this.crm = crm;
        this.specialty = specialty;
    }
    getCrm() {
        return this.crm;
    }
    setCrm(newCrm) {
        this.crm = newCrm;
    }
    getSpecialty() {
        return this.specialty;
    }
    setSpecialty(newSpecialty) {
        this.specialty = newSpecialty;
    }
}
exports.default = Doctor;
