"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Treatment_1 = require("./Treatment");
class Surgery extends Treatment_1.default {
    constructor(date, doctor, time) {
        super(date, doctor);
    }
}
exports.default = Surgery;
