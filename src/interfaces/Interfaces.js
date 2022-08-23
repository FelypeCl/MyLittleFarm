var lojaDePlantasAberta = false;

const $LOJA_DE_PLANTAS = document.getElementById("lojaPlantas");
$LOJA_DE_PLANTAS.addEventListener("click", () => {
    if(lojaDePlantasAberta == false){
        abrirLojaDePlantas();
    } else {
        fecharLojaDePlantas();
    }
})

function removerDOMS(){
    document.getElementById("listaDePlantas").style.display = "none";
}

function abrirLojaDePlantas(){
    document.getElementById("listaDePlantas").style.display = "block";
    $LOJA_DE_PLANTAS.value = "FECHAR LOJA DE PLANTAS";
    lojaDePlantasAberta = true;
    console.log("Loja de plantas aberta");
}

function fecharLojaDePlantas(){
    document.getElementById("listaDePlantas").style.display = "none";
    $LOJA_DE_PLANTAS.value = "ABRIR LOJA DE PLANTAS";
    lojaDePlantasAberta = false;
    console.log("Loja de plantas fechada");
}