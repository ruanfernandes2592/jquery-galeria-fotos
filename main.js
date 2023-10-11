
    // console.log(document.querySelector('header button')) - Sem JQuery
    // console.log($('header button')) // Com JQuery

    // document.querySelector('header button').addEventListener('click', function() {
        //---------------------
    // })  - Atribuindo função para o botão sem JQuery

$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btcancel').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display:none"></li>')
        $(`<img src ='${enderecoDaNovaImagem}' />`).appendTo(novoItem)
        $(`
            <div class='overlay-imagem-link'>
                <a href='${enderecoDaNovaImagem}' target='_blank' title='Ver imagem em tamanho real'>
                Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem) // para adicionar os comandos html acima, dentro da <li> da constante novoItem
        $(novoItem).appendTo('ul') // para adicionar a constante dentro da <lu> do html
        $(novoItem).fadeIn(1000 /*tempo a aparição em milissegundos*/) // para a imagem adicionada aparecer de forma suave
        $('#endereco-imagem-nova').val('') // para o valor do input ser apagado
    })
})