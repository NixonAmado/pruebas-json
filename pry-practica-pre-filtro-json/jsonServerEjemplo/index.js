// price_gte=100&price_lte=499
//q=mouse   q=query -> consulta

import {Usuario,UsuarioManagement} from "./Usuario.js";


async function fetchData(){
    try{
        let data= await fetch('http://localhost:3000/db.json');
        console.log(data);
    }catch(e){
        console.error("Failed to fetch data" + e)
    }
}


async function verRegistro(){
    let tableBody = document.getElementById('t-body'); 
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        
    }
}
document.addEventListener('DOMContentLoaded', function() {
const btnFormRegistro = document.getElementById('form-register-btn');
const formRegister = document.getElementById('form-register');
let contador=0
btnFormRegistro.addEventListener("click", e => {
    e.preventDefault();
    const RegisterName =  document.getElementById('registerName').value;
    const RegisterUserName =  document.getElementById('registerUsername').value;
    const RegisterEmail =  document.getElementById('registerEmail').value;
    const RegisterPassword =  document.getElementById('registerPassword').value;
    const radioSeleccionado = document.getElementsByClassName('inlineRadioOptions');
    for(radio of radioSeleccionado){
        if(radio.checked){
            radioSeleccionado = radio.value
        }
        radio||alert("debes elegir un tipo de sexo");return
    }
    //(nombre,usuario,email,password)
    contador++
    let usuario = new Usuario(RegisterName,RegisterUserName,RegisterEmail,RegisterPassword,radioSeleccionado,contador);
    console.log("->",usuario)
    formRegister.reset();
    })
})
