"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const People_1 = require("./People");
class Patient extends People_1.default {
    constructor(name, cpf) {
        super(name, cpf);
    }
}
exports.default = Patient;
