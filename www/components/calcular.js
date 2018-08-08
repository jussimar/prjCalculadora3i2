// This is a JavaScript file
$(document).on("click","#somar", function(){
    var valor1 = parseInt($("#valor1").val());
    var valor2 = parseInt($("#valor2").val());

    var result = valor1 + valor2;

    $("#result").val(result);
});
