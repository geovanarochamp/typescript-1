export class Negociacao {
    /*
    Se no construtor da sua classe você coloca o modificador private ou public, isso indica para o TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o mesmo nome do seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, vai pegar esse valor e vai jogar lá para você.
    */

    constructor(
        public _date: Date,
        public readonly quantidade: number,
        public readonly valor: number) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._date.getTime())
        return data;
    }
}