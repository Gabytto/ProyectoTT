function subtotal() {
    let a = parseInt(document.getElementById('precio-moto#1').textContent)
    let b = parseInt(document.getElementById('precio-moto#2').textContent)
    let c = parseInt(document.getElementById('precio-moto#3').textContent)
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
    let a = parseInt(document.getElementById('modal-subtotal').textContent)
    let b = parseInt(document.getElementById('modal-descuento').textContent)
    let c = parseInt(document.getElementById('modal-iva').textContent)
    let total = a + b + c
    document.getElementById('modal-total').innerHTML = total

}


subtotal()
descuento()
ng()
iva()
totalAPagar()