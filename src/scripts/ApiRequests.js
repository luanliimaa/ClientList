export class ApiRequests {

    static baseUrl = "https://atividade-api-clientes.herokuapp.com"

    static async getClients(){
        const clients = await fetch(`${this.baseUrl}/clientes`, {
            method: "GET"
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
    }

}