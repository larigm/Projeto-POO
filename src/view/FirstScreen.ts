import PromptSync from "prompt-sync";
export default class FirstScreen {
  private prompt = PromptSync();

  public mainMenu(): void {
    let open: boolean = true;
    
    while (open) {
      console.log("=-=-=-=-=Menu principal=-=-=-=-=\n");
      let option = parseInt(
        this.prompt(
          "1. Cadastrar Novo Médico \n 2. Cadastrar Novo Paciente \n 3. Listar Todos \n 0. Sair ",
        ),
      );
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
