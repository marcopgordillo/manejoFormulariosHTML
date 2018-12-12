/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validarForma(forma) {
    
    // validar usuario
    var usuario = forma.usuario;
    if (usuario.value === "") {
        alert("Debe proporcionar un nombre de usuario!");
        usuario.focus();
        usuario.select();
        return false;
    }
    
    // validar passoword
    var password = forma.password;
    if (password.value === "" || password.value.length < 3) {
        alert("Debe proporcionar un password de al menos 3 caracteres!");
        password.focus();
        password.select();
        return false;
    }
    
    // validamos las tecnologías de interés
    var tecnologias = forma.tecnologia;
    var checkSeleccionado = false;
    
    for (var i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }
    
    if (!checkSeleccionado) {
        alert("Debe proporcionar una tecnología");
        return false;
    }
    
    //validamos el genero
    var generos = forma.genero;
    var radioSeleccionado = false;
    
    for (var i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    
    if (!radioSeleccionado) {
        alert("Debe seleccionar el género!");
        return false;
    }
    
    // validamos la ocupación
    var ocupacion = forma.ocupacion;
    if (ocupacion.value === "") {
        alert("Debe seleccionar una ocupación!");
        return false;
    }
    
    // formulario validado
    alert("Formulario válido, enviando datos...");
    return true;
}

