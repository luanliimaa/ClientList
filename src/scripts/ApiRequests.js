export class ApiRequests {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com"

    static async getClients(){
        const clients = await fetch(`${this.baseUrl}/clientes`)
        .then(res => res.json())
        return clients
    }

}