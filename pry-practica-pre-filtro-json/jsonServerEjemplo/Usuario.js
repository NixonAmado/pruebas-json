export {Usuario,UsuarioManagement} 


class Usuario {
    constructor(nombre,usuario,email,password,sexo,id){
        this.id = id
        this.nombre = nombre,
        this.usuario = usuario,
        this.email= email,
        this.sexo = sexo,
        this.password = password,
        this.sexo = sexo
    }
}

const URL = "http://localhost:3000"
const headers = new Headers ({'Content-Type': 'application/json'});


class UsuarioManagement{
    async obtenerDatos(){
       return await (await(fetch(`${URL}`))).json();
    }
    postDatos(){
        fetch(`${URL}/persona`,{
            method: 'POST',
            headers: headers,
        })}
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