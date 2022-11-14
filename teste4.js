var quantidadestotais = document.getElementById("quantidades")
var quant = 0
var TotalDeCompras = document.getElementById("total");
var total = 0 


function comprar(produto){
    // adiciona o valor de produtos selecionados de cada ao input
    var ProdAEnviar = document.getElementById("produto"+produto)
    ProdAEnviar.value++
    // vou buscar o preco de cada produto guardo em precoProduto
    var Prod = document.getElementById("precoproduto"+produto);
    var precoProduto = Prod.value;
    //adiciona a quantidade
    quant++
    quantidadestotais.innerHTML = quant
    // somo os preços e guardo o total
    total+=parseFloat(precoProduto);
    TotalDeCompras.innerHTML = total.toFixed(2);

    
}


function validar(){
    if (quantidadestotais==0){
        alert("Adiciona algum produto ao carrinho!")
        return false;
    } else {
        return true;
    }
}
    
function limpar(){
    quant=0
    quantidadestotais.innerHTML = quant
    total=0.00
    TotalDeCompras.innerHTML = total.toFixed(2);

}
