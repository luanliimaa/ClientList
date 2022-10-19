import { ApiRequests } from "./ApiRequests.js";
import { Toast } from "./Toastfy.js";

class DeleteClient{
    static async renderClients(){
        const selectInput = document.getElementById("select")
        const clients = await ApiRequests.getClients()

        selectInput.innerHTML = ""
        const option = document.createElement("option")
        option.innerText = "Lista de clientes"
        option.disabled = true
        option.selected = true
        option.value = ""
        selectInput.append(option)

        clients.forEach((client) => {
            const option = document.createElement("option")
            option.innerText = client.nome
            option.value = client.id
            selectInput.append(option)
        })
    }

    static removeClient(){
        const selectInput = document.getElementById("select")
        const deleteBtn = document.getElementById("delete")

        deleteBtn.addEventListener("click", async (event) => {
            event.preventDefault()

            if (selectInput.value != ""){
                if (selectInput.value <= 6){
                    Toast.create("Você não pode deletar esse cliente", "red", 5000)
                } else {
                    await ApiRequests.deleteClient(selectInput.value)
                    .then(res => {
                        console.log("deletado com sucesso")
                        DeleteClient.renderClients()
                    })
                }
            }
        })
    }
}

DeleteClient.renderClients()
DeleteClient.removeClient()