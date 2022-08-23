document.addEventListener('DOMContentLoaded', () => {
    removerDOMS();
    iniciar();
})

function iniciar(){
    const PLAYER = new Player(1000, 0, 0);
    const TERRENO_BLOQUEADO = new Planta("Bloqueado", 0, 0, 0, 0, "../assets/terraBloqueada.png");
    const ALGODAO = new Planta("Algodao", 5, 5, 5, 5, "../assets/algodao_grande.png");
    var meusTerrenos = [];
    
    //Terreno Inicial
    criarLieImgsTerreno(TERRENO_BLOQUEADO);
    comprarPlanta();

    function comprarPlanta(){
        let localizarTerreno = document.getElementById("planta" + meusTerrenos.length);
        localizarTerreno.addEventListener('click', () => {
            abrirLojaDePlantas();
            const $PLANTA_VENDA_1 = document.getElementById("plantaVenda1");
            $PLANTA_VENDA_1.addEventListener("click", () => {
                if(PLAYER.dinheiro >= 10){
                    PLAYER.dinheiro -= 10;
                    fecharLojaDePlantas();
                    removerLieImgsTerreno();
                    criarLieImgsTerreno(ALGODAO);
                    criarLieImgsTerreno(TERRENO_BLOQUEADO);
                    console.log("planta" + meusTerrenos.length);
                    console.log(meusTerrenos);
                    comprarPlanta();
                } else {
                    console.log("Sem dinheiro");
                }
            });
        });
    }

    function criarLieImgsTerreno(terreno){
        meusTerrenos.push(terreno); //Guardar o terreno na lista de terreno.
        const REDE_DE_PLANTAS = document.getElementById("redeDePlantas");
        let criarLi = document.createElement("li");
        let criarImg = document.createElement("img");
        let localizarTerreno = meusTerrenos.length;
        criarLi.setAttribute("id","plantali" + localizarTerreno);
        criarLi.setAttribute("class","planta");
        criarImg.setAttribute("id", "planta" + localizarTerreno);
        criarImg.setAttribute("class", "plantas");
        criarImg.setAttribute("src", terreno.asset);
        REDE_DE_PLANTAS.appendChild(criarLi).appendChild(criarImg);
    }

    function removerLieImgsTerreno(){
        const REDE_DE_PLANTAS = document.getElementById("redeDePlantas");
        let localizarTerreno = meusTerrenos.length;
        let li = document.getElementById("plantali" + localizarTerreno);
        REDE_DE_PLANTAS.removeChild(li);

        if(meusTerrenos.length <= 1){
            meusTerrenos.splice(0,1);
        } else {
            meusTerrenos.splice(0, meusTerrenos.length);
        }
    }

    function carregarTerrenos(){
        meusTerrenos.forEach((terreno) => {
            //console.log(terreno)
        });

        //console.log("Terrenos Atualizados: Quantidade de terrenos = " + meusTerrenos.length);
        setTimeout(carregarTerrenos, TEMPO_DE_UPDATE_CLIENT);
    }; carregarTerrenos();

    function atualizarDadosUser(){
        console.log('Dados do usuário atualizadas.');
        document.getElementById("dinheiro").innerHTML = "R$"+PLAYER.dinheiro;
        document.getElementById("xp").innerHTML = "XP:"+PLAYER.level;
        setTimeout(atualizarDadosUser, TEMPO_DE_UPDATE_CLIENT);
    }; atualizarDadosUser();
}