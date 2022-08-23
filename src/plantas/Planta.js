var tipoDaPlanta;
var tempoDeColheita;
var qntdXp;
var qntdDinheiro;
var nivelDaPlanta
var asset;
var meusTerrenos = [];

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

    gerarTerreno(){
        meusTerrenos.push(this);
        const REDE_DE_PLANTAS = document.getElementById("redeDePlantas");
        let criarLi = document.createElement("li");
        let criarImg = document.createElement("img");
        let criarTxt = document.createElement("h3");
        let texto = document.createTextNode("R$35");
        let localizarTerreno = meusTerrenos.length;
        criarLi.setAttribute("id","plantali" + localizarTerreno);
        criarLi.setAttribute("class","planta");
        criarImg.setAttribute("id", "planta" + localizarTerreno);
        criarImg.setAttribute("class", "plantas");
        criarImg.setAttribute("src", this.asset);
        criarTxt.appendChild(texto);
        criarTxt.setAttribute("id", "dinheiroli" + localizarTerreno);
        criarTxt.setAttribute("class", "dinheiroProfit");
        
        if(meusTerrenos.length == 1 && this.tipoDaPlanta == "Bloqueado"){
            REDE_DE_PLANTAS.appendChild(criarLi).appendChild(criarImg);
        } else if (meusTerrenos[meusTerrenos.length - 1].tipoDaPlanta == "Bloqueado"){
            REDE_DE_PLANTAS.appendChild(criarLi).appendChild(criarImg);
        } else {
            REDE_DE_PLANTAS.appendChild(criarLi).appendChild(criarImg);
            REDE_DE_PLANTAS.appendChild(criarLi).appendChild(criarTxt);
        }
    }

    removerTerreno(){
        const REDE_DE_PLANTAS = document.getElementById("redeDePlantas");
        let li = document.getElementById("plantali" + meusTerrenos.length);
        REDE_DE_PLANTAS.removeChild(li);

        if(meusTerrenos.length == 1){
            meusTerrenos.shift();
        } else {
            meusTerrenos.pop();
        }
    }
}