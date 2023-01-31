export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista():ReadonlyArray<Negociacao> {
    lista() {
        return [...this.negociacoes];
    }
}
