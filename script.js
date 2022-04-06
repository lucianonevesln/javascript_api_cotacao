var botaoMoeda = document.querySelector("#id_submit");

botaoMoeda.addEventListener('click', function (Event) {

    Event.preventDefault();

    var moeda = document.querySelector('input[name="id_moeda"]:checked').value;

    cotacao = 'https://economia.awesomeapi.com.br/last/' + moeda;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', cotacao);

    xhr.addEventListener('load', function () {

        var resposta = xhr.responseText;
        var cotacao = JSON.parse(resposta);
        console.log(cotacao);

        if (cotacao['USD']) {
            cotacao = cotacao['USD'];
        } else if (cotacao['EUR']) {
            cotacao = cotacao['EUR'];
        } else {
            cotacao = cotacao['BTC'];
        };

        return mostrarCotacao(cotacao);

    });

    xhr.send();

});

function mostrarCotacao (cotacao) {

    document.querySelector('#ask').innerHTML = cotacao.ask;
    document.querySelector('#bid').innerHTML = cotacao.bid;
    document.querySelector('#code').innerHTML = cotacao.code;
    document.querySelector('#codein').innerHTML = cotacao.codein;
    document.querySelector('#create_date').innerHTML = cotacao.create_date;
    document.querySelector('#high').innerHTML = cotacao.high;
    document.querySelector('#low').innerHTML = cotacao.low;
    document.querySelector('#name').innerHTML = cotacao.name;
    document.querySelector('#pctChange').innerHTML = cotacao.pctChange;
    document.querySelector('#varBid').innerHTML = cotacao.varBid;
    document.querySelector('#tabela_cotacao').style.display = 'table';

};