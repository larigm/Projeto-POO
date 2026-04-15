"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class FirstScreen {
    constructor() {
        this.prompt = (0, prompt_sync_1.default)();
    }
    mainMenu() {
        let open = true;
        while (open) {
            console.log("=-=-=-=-=Menu principal=-=-=-=-=\n");
            let option = parseInt(this.prompt("1. Cadastrar Novo Médico \n 2. Cadastrar Novo Paciente \n 3. Listar Todos \n 0. Sair "));
            switch (option) {
                case 0:
                    console.log("saindo...");
                    open = false;
                    break;
                case 1:
                    console.log("funcionamento em breve");
                    break;
                case 2:
                    console.log("funcionamento em breve");
                    break;
                case 3:
                    console.log("funcionamento em breve");
                    break;
                default:
                    console.log("opção invalida");
            }
        }
    }
}
exports.default = FirstScreen;
