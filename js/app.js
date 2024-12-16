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
    document.getElementById('masmenos-mas').onclick = function() {
      actualizarCantidad('incrementar');
    };
    document.getElementById('masmenos-menos').onclick = function() {
      actualizarCantidad('decrementar');
    }; 
};

function realizarCompra(){
    confirm('Compra realizada exitosamente!')
}
function subtotal() {
    let a = parseInt(document.getElementById('cantidad-moto').textContent)
    let b = parseInt(document.getElementById('cantidad-linga').textContent)
    let c = parseInt(document.getElementById('cantidad-casco').textContent)
    console.log(a)
    let suma = a+b+c
    document.getElementById('modal-subtotal').innerText = suma  
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
    console.log(a)
    document.getElementById('modal-total').innerHTML = total
}
subtotal()
descuento()
ng()
iva()
totalAPagar()