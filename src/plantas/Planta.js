var tipoDaPlanta;
var tempoDeColheita;
var qntdXp;
var qntdDinheiro;
var nivelDaPlanta
var asset;

const tiposDePlantas = ["Bloqueado", "Algodao", "Alho", "Batata", "Cebola"]

class Planta{
    constructor(tipoDaPlanta, tempoDeColheita, qntdXp, qntdDinheiro, nivelDaPlanta, asset){
        this.tipoDaPlanta = tipoDaPlanta;
        this.tempoDeColheita = tempoDeColheita;
        this.qntdXp = qntdXp;
        this.qntdDinheiro = qntdDinheiro;
        this.nivelDaPlanta = nivelDaPlanta;
        this.asset = asset;
    }
}