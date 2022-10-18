import { Toast } from "./Toastfy.js"

export class ApiRequests {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com"

    static async getClients(){
        const clients = await fetch(`${this.baseUrl}/clientes`)
        .then(res => res.json())
        .then(res => {
            Toast.create("Lista carregada com sucesso!", "green", 5000)
            return res
        })
        .catch(err => {
            Toast.create("Ops! Deu ruim", "red", 5000)
            console.log(err)
        })
        return clients
    }

}