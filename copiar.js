function copy_text(){

    const contenido = document.querySelector('.parrafo');
    navigator.clipboard.writeText(contenido.innerHTML).then(function(){
      alert('Texto copiado 😃');
    }, function(err){
      console.error('No se pudo copiar el texto', err);
    });
    
  }

  const boton3 = document.querySelector('copiar');
