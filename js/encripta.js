
function estilos(){
    document.getElementById("texto3").style.fontSize = "35px";

}

let parrafo; 

function spam(){
    parrafo = document.querySelector("#cajatexto").value;
    document.getElementById("texto3").innerHTML = parrafo;  
    estilos();
    mostrarTexto();
 
}



function encriptador(frase){
   let newText = frase. 
    replace(/e/g,'enter').  
    replace(/i/g, 'imes').  
    replace(/a/g,'ai').
    replace(/o/g, 'ober').
    replace(/u/g, 'ufat');
   
    return newText;
    
}

function mostrarTexto(){
    let parrafo = document.querySelector("#cajatexto").value
    parrafo = parrafo.toLowerCase();
    document.getElementById("texto3").innerHTML = encriptador(parrafo);
}

function desencriptador(frase){
    let newText = frase. 
     replace(/enter/g,'e').  
     replace(/imes/g, 'i').  
     replace(/ai/g,'a').
     replace(/ober/g, 'o').
     replace(/ufat/g, 'u');
 
    return newText;
     
}
function mostrarTexto2(){
    let parrafo = document.querySelector("#cajatexto").value
    parrafo = parrafo.toLowerCase();
    document.getElementById("texto3").innerHTML = desencriptador(parrafo);
    
}



function spam2(){
    parrafo = document.querySelector("#cajatexto").value;
    document.getElementById("texto3").innerHTML = parrafo;
    estilos();
    mostrarTexto2();
}

function copiar(){

   let texto = document.getElementById("texto3");
    texto = document.execCommand('copy');
    
}


let boton = document.querySelector("#encriptador");
boton.onclick = spam 


let boton2 = document.querySelector("#desencriptador");
boton2.onclick = spam2 


//toUpperCase