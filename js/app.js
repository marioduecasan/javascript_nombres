const form = document.getElementById('generar-nombre');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    //leer variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidadSeleccionada = document.getElementById('numero').value;
    
    let url = '';
    
    url += 'https://uinames.com/api/?';

    if(origenSeleccionado !== ''){
        url += `region=${origenSeleccionado}&`;
    }
    if(generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`;
    }
    if(cantidadSeleccionada !== ''){
        url += `amount=${cantidadSeleccionada}`;
    }
    
    //conectando con ajax
    //iniciar XMLHttRequest

    const xhr = new XMLHttpRequest();
    
    //abrimos la conexion
    xhr.open('GET', url , true);
    
    //datos e impresion del template
    xhr.onload = function(){
        if(this.status === 200){
            let nombreLista = JSON.parse(this.responseText);

            let nombreTemplate = '<h2>Nombres Generados</h2>';
            nombreTemplate += '<ul class="lista">';

            nombreLista.forEach(function(nombre){
                
                nombreTemplate += `<li>${nombre.name}</li>`;
            });

            nombreTemplate += '</ul>';

            document.getElementById('resultado').innerHTML= nombreTemplate;
            };
        };
    //enviar el request
    xhr.send();

})