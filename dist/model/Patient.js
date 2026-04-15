"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = __importDefault(require("./People"));
const StatusPatient_1 = require("./StatusPatient");
class Patient extends People_1.default {
    constructor(name, cpf, description, status) {
        super(name, cpf);
        this.status = StatusPatient_1.StatusPatient.Aguardando;
        this.description = description;
    }
    // Método para o médico ou sistema alterar o estado do paciente
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.default = Patient;
