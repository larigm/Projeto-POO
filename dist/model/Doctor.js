"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = require("./People");
class Doctor extends People_1.default {
    constructor(name, cpf, crm, specialty) {
        super(name, cpf);
    }
}
exports.default = Doctor;
