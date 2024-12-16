window.onload = function() {
    const botonesMasmenos = document.querySelectorAll('.btn-masmenos');
    botonesMasmenos.forEach(boton => {
        boton.addEventListener('click', (event) => {
          const producto = event.target.closest('.producto');
          const productoId = producto.querySelector('span').textContent.toLowerCase(); // Obtener ID del producto
          const operacion = event.target.textContent === '+' ? 'incrementar' : 'decrementar';
          actualizarCantidad(productoId, operacion);
        });
    });

    function actualizarCantidad(productoId, operacion) { 
      const cantidadElement = document.getElementById(`cantidad-${productoId}`);
      let cantidad = parseInt(cantidadElement.textContent);
      const stockMaximo = parseInt(document.getElementById(`stock-${productoId}`).textContent)
      if (operacion === 'incrementar') {
        if(cantidad < stockMaximo){
            cantidad++;
        }
        else{
            alert('No hay mas stock.')
        }
      } else if (operacion === 'decrementar') {
        cantidad = Math.max(cantidad - 1, 0); // Evita valores negativos
      }
      cantidadElement.textContent = cantidad;
    }
   
    function calcularSubtotal() {
        const cantidadMoto = parseInt(document.getElementById('cantidad-moto').textContent)
        const cantidadLinga = parseInt(document.getElementById('cantidad-linga').textContent)
        const cantidadCasco = parseInt(document.getElementById('cantidad-casco').textContent)
        const precioMoto = parseInt(document.getElementById('precio-moto').textContent)
        const precioLinga = parseInt(document.getElementById('precio-linga').textContent)
        const precioCasco = parseInt(document.getElementById('precio-casco').textContent)
        if(!isNaN(cantidadMoto) && !isNaN(cantidadLinga) && !isNaN(cantidadCasco)){
            montoCasco = cantidadCasco*precioCasco
            montoLinga = cantidadLinga*precioLinga
            montoMoto = cantidadMoto*precioMoto
            const subtotal = montoMoto + montoLinga + montoCasco
            document.getElementById('modal-subtotal').textContent = subtotal 
        }else{
            alert('algunos de los valores no es un numero')
        }
        
         
    }
    document.addEventListener('DOMContentLoaded', calcularSubtotal);
    const botones = document.querySelectorAll('.btn-masmenos');
    botones.forEach(boton => {
        boton.addEventListener('click', calcularSubtotal);
    });
    
};


function realizarCompra(){
    confirm('Compra realizada exitosamente!')
}

function descuento() {
    let a = parseInt(document.getElementById('modal-subtotal').textContent)
    a = a * 0.1
    document.getElementById('modal-descuento').innerHTML = '-' + a
}
function ng() {
    let a = parseInt(document.getElementById('modal-subtotal').textContent)
    let b = parseInt(document.getElementById('modal-descuento').textContent)
    let suma = a+b
    document.getElementById('modal-ng').innerText = suma  
}
function iva(){ 
    let iva = parseInt(document.getElementById('modal-ng').textContent)
    iva = iva * 0.21
    document.getElementById('modal-iva').innerHTML = iva
}
function totalAPagar(){
    let a = parseInt(document.getElementById('modal-ng').textContent)
    let b = parseInt(document.getElementById('modal-iva').textContent)
    let total = a + b
    document.getElementById('modal-total').innerHTML = total
}

descuento()
ng()
iva()
totalAPagar()