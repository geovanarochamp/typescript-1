export class Negociacao {
    /*
    Se no construtor da sua classe você coloca o modificador private ou public, isso indica para o TypeScript que ele vai por debaixo dos panos criar uma propriedade da sua classe que contenha o mesmo nome do seu com os parâmetros do construtor, e por debaixo dos panos ele vai fazer a atribuição, vai pegar esse valor e vai jogar lá para você.
    */

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number) {}

    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }
}