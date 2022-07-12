const calcular = () => {
  try {
    let distancia = document.querySelector('#distancia');
    let frecuencia = document.querySelector('#frecuencia');

    if (distancia.value.length > 0 && frecuencia.value.length > 0) {
      let resultado = 17.32 * Math.sqrt(distancia.value / (4 * frecuencia.value));
      
      koModel.arrayCalculos.push({ 
        distancia: distancia.value,
        frecuencia: frecuencia.value,
        resultado: resultado.toFixed(2),
      })

      distancia.value = '';
      // frecuencia.value = '';
    }
    
  } catch (error) {
    console.log(error);
  }

}

const limpiar = () => {
  distancia.value = '';
  frecuencia.value = '';
  koModel.arrayCalculos([]);
}


var koModel = {
  arrayCalculos: ko.observableArray([])
}
