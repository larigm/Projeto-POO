"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Treatment_1 = __importDefault(require("./Treatment"));
class Checkup extends Treatment_1.default {
    constructor(date, doctor) {
        super(date, doctor);
    }
}
exports.default = Checkup;
