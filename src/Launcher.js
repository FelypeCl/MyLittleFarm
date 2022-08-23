document.addEventListener('DOMContentLoaded', () => {
    removerDOMS();
    iniciar();
    iniciarFarmAlgodao();
})

/*
    Objetos
*/

const PLAYER = new Player(1000, 0, 0);
const TERRENO_BLOQUEADO = new Planta("Bloqueado", 0, 0, 0, 0, "../assets/terraBloqueada.png");
const ALGODAO = new Planta("Algodao", 5000, 5, 35, 1, "../assets/algodao_grande.png");

//Terreno Inicial
TERRENO_BLOQUEADO.gerarTerreno();

function iniciar(){
    const $TERRENO_PRA_COMPRA = document.getElementById("plantali"+meusTerrenos.length);

    $TERRENO_PRA_COMPRA.onclick = () => {
        comprarPlanta();
    };

    function comprarPlanta(){
        abrirLojaDePlantas();
        const $PLANTA_VENDA = document.getElementById("plantaVenda1");
        $PLANTA_VENDA.onclick = () => {
            if(PLAYER.dinheiro >= 10){
                PLAYER.dinheiro -= 10;
                PLAYER.xp += ALGODAO.qntdXp;
                for(let i = 0; i < meusTerrenos.length; i++){
                    if(meusTerrenos[i].tipoDaPlanta == "Bloqueado"){
                        meusTerrenos[i].removerTerreno();
                    }
                }
                ALGODAO.gerarTerreno();
                TERRENO_BLOQUEADO.gerarTerreno();
                console.log(meusTerrenos)
                fecharLojaDePlantas();
            } else {
                console.log("Você não tem dinheiro.");
            }
        };
    };

    function atualizarDadosUser(){
        console.log('Dados do usuário atualizadas.');
        document.getElementById("dinheiro").innerHTML = "R$"+PLAYER.dinheiro;
        document.getElementById("xp").innerHTML = "XP:"+PLAYER.xp;
    }; atualizarDadosUser();

    setTimeout(iniciar, TEMPO_DE_UPDATE_CLIENT);
}

function iniciarFarmAlgodao(){
    if(meusTerrenos.length < 1)
        return;

    let qntdTerrasAlgodao = 0;

    for(let i = 0; i < meusTerrenos.length; i++){
        if(meusTerrenos[i].tipoDaPlanta == "Algodao"){
            qntdTerrasAlgodao += 1;
        }
    }

    PLAYER.dinheiro += qntdTerrasAlgodao * ALGODAO.qntdDinheiro;

    console.log("Qntd algodao: ", qntdTerrasAlgodao)
    console.log("Você faturou: ", qntdTerrasAlgodao * ALGODAO.qntdDinheiro, " com algodão")

    setTimeout(iniciarFarmAlgodao, ALGODAO.tempoDeColheita);
}