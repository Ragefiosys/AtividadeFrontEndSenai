//efeito de esconder formulário de cadastro
$(document).ready(function(){

    $("#botao-cadastrar").click(function(){

        $("#form-cadastrar").slideToggle("Slow");
        $("#section-login").slideToggle("Slow");
        $("#botao-cadastrar").hide();
    });
});
