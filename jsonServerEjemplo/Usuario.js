export {Usuario,UsuarioManagement} 


class Usuario {
    constructor(nombre,usuario,email,password,sexo){
        this.nombre = nombre,
        this.usuario = usuario,
        this.email= email,
        this.sexo = sexo,
        this.password = password
    }
}

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});


class UsuarioManagement{
    async obtenerDatos(){
        let data = await fetch(`${URL}/usuario`);
        let response = await(data).json();
        verRegistro(response);
    }
    async postDatos(data){
        await fetch(`${URL}/usuario`,{
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
    }

    actualizarDatos(){
        fetch(`${URL}`,{
            method: 'PUT',
            headers: headers,
        })}
    eliminarDatos(){
        fetch(`${URL}`,{
            method: 'DELETE',
            headers: headers,
        })}        
}