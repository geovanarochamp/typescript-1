import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = []

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }
}

const negociacoes = new Negociacoes();
alert("oi")
//negociacoes.adiciona(new Negociacao())