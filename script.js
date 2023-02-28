async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {        
        var consultaCep = await  fetch (`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertida = await  consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente')
        }
        var  cidade = document.getElementById('cidade');
        var  logradouro = document.getElementById('endereco');
        var  estado = document.getElementById('estado');
        
        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;


        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    } catch (error){
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente!</p>`
        console.log(error);
    }
}

var  cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));


// let ceps = ['01001000', '02858000','05051040']
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));

// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

