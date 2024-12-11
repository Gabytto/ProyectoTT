function subtotal() {
    let a = parseInt(document.getElementById('precio-moto#1').textContent)
    let b = parseInt(document.getElementById('precio-moto#2').textContent)
    let c = parseInt(document.getElementById('precio-moto#3').textContent)
    let suma = a+b+c
    // console.log(suma)
    document.getElementById('modal-subtotal').innerText = suma  
}
subtotal()