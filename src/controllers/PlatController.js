import BaseController from "./BaseController";

class PlatController extends BaseController {

    constructor() {
        super('m9aih771jtgf7tp', 'plats');
    }

    async getCarta() {
        let carta = await this.getAll();
        //carta = carta.list;
        // extraient la foto, només agafem la primera
        carta = carta.map(e => {
            let foto = (e.foto && e.foto[0].signedUrl) ?  e.foto[0].signedUrl : '';
            e.foto = foto;
            return e;
        });
        return carta;
    }

    async getMenu() {
        let menu = await this.getCarta();
        // ens quedem només els que tenene menu=true
        return menu.filter(e => e.menu); 
    }
  async getEntrada() {
    let entrada = await this.getCarta();
    // ens quedem només els que tenene entrada=true
    return entrada.filter(e => e.entrada);
  }
  async getPostre() {
    let postre = await this.getCarta();
    // ens quedem només els que tenene postre=true
    return postre.filter(e => e.postre);
  }
  async getPrincipal(){
    let principal= await this.getCarta();
    //principal====true
    return principal.filter(e=>e.principal)
  }

}


export default PlatController;