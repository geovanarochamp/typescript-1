export class Negociacao {
    /*
    Se no construtor da sua classe você coloca o modificador private ou public, isso indica para o TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o mesmo nome do seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, vai pegar esse valor e vai jogar lá para você.
    */
    constructor(_date, quantidade, valor) {
        this._date = _date;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._date.getTime());
        return data;
    }
}
