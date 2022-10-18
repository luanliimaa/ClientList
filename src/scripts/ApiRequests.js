export class ApiRequests {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com"

    static async getClients(){
<<<<<<< HEAD
        const clients = await fetch(`${this.baseUrl}/clientes`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
=======
        const clients = await fetch(`${this.baseUrl}/clientes`)
        .then(res => res.json())
        return clients
>>>>>>> 4a329da2d9a3c69831475fef92f97f5f04c75171
    }

}