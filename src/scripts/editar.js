import { ApiRequests } from "./ApiRequests.js";
import { Toast } from "./Toastfy.js";

class EditClient{
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

    static handleSearchBtn(){
        const selectInput = document.getElementById("select")
        const searchBtn = document.getElementById("search")
        const form = document.querySelector(".form__data")

        searchBtn.addEventListener("click", async (event) => {
            event.preventDefault()

            if (selectInput.value != ""){
                if (selectInput.value <= 5){
                    Toast.create("Você não pode editar esse cliente", "red", 5000)
                } else {
                    const client = await ApiRequests.getClient(selectInput.value)
                    if (client){
                        form.style.display = "flex"
                        EditClient.showClientData(client)
                    }
                }
            }
        })
    }

    static showClientData(client){
        const form = document.querySelector(".form__data")

        form.name.value = client.nome
        form.email.value = client.email
        form.gender.value = client.sexo
        form.age.value = client.idade
        form.cpf.value = client.cpf
        form.state.value = client.endereco.estado
        form.city.value = client.endereco.cidade
        form.strict.value = client.endereco.bairro
        form.number.value = client.endereco.numero
        form.street.value = client.endereco.rua
        form.cep.value = client.endereco.cep

        EditClient.handlerEditBtn()
    }

    static handlerEditBtn(){
        const selectInput = document.getElementById("select")
        const formElement = document.querySelector(".form__data")
        const btnSubmit = document.getElementById("editar")

        btnSubmit.addEventListener("click", async (event) => {
            event.preventDefault()
            
            const data = {
                nome: formElement.name.value,
                email: formElement.email.value,
                sexo: formElement.gender.value,
                idade: parseInt(formElement.age.value),
                cpf: formElement.cpf.value,
                endereco: {
                    estado: formElement.state.value,
                    cidade: formElement.city.value,
                    bairro: formElement.strict.value,
                    numero: formElement.number.value,
                    rua: formElement.street.value,
                    cep: formElement.cep.value
                }
            }
    
            await ApiRequests.updateClient(selectInput.value, data)
            formElement.style.display = "none"
            EditClient.renderClients()
        })
    }
}

EditClient.renderClients()
EditClient.handleSearchBtn()