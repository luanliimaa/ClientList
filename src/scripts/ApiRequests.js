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

    static async signUpClient(body){
        const newsUser = await fetch(`${this.baseUrl}/clientes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res => {
            Toast.create("Cliente Cadastrado com sucesso!", "green", 5000)
            return res
        })
        .catch(err => {
            console.log(err)
            Toast.create("Ops! Algo deu errado no cadastro do cliente", "red", 5000)
        })
        return newsUser
    }

    static async deleteClient(id){
        const deleteUser = await fetch(`${this.baseUrl}/clientes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            Toast.create("Cliente Deletado com sucesso!", "green", 5000)
            return res
        })
        .catch(err => {
            console.log(err)
            Toast.create("Ops! Algo deu errado ao deletar o cliente", "red", 5000)
        })
        return deleteUser
    }

}