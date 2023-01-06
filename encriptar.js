
const espacio = document.querySelector('.no_text');

function encriptar(){  

  let texto = document.querySelector('#text').value;
  const obj = {
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat'
  }

  texto = texto.replaceAll(/a|e|i|o|u/g, function(matched){
    return obj[matched];
  });

  espacio.innerHTML = '<p class="parrafo">'+texto+'</p>' + '<button onclick="copy_text()" name="copiar">Copiar</button>';
}

function desencriptar(){

  let texto = document.querySelector('#text').value;
  const obj = {
    'ai':'a',
    'enter':'e',
    'imes':'i', 
    'ober':'o',
    'ufat':'u'
  }

  texto = texto.replaceAll(/ai|enter|imes|ober|ufat/g, function(matched){
    return obj[matched];
  });

  espacio.innerHTML = '<p class="parrafo">'+texto+'</p>' + '<button onclick="copy_text()" name="copiar">Copiar</button>';
}

const boton1 = document.querySelector('encriptar');
const boton2 = document.querySelector('desencriptar');

//




