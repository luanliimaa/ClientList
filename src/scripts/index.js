import { ApiRequests } from "./ApiRequests.js";

class Render{
    static renderClients(array){
        const ul = document.getElementById("clientList")

        ul.innerHTML = ""

        array.forEach((client) => {
            const card = Render.renderCard(client)
            ul.append(card)
        })
    }

    static renderCard(client){
        const li = Render.createElement("li")
        li.classList.add("card")

        const name = Render.createElement("h2", client.nome)
        
        const personalTitle = Render.createElement("h3", "Dados Pessoais")

        const age = Render.createElement("p", `idade: ${client.idade}`)
        const cpf = Render.createElement("p", `CPF: ${client.cpf}`)
        const gender = Render.createElement("p", `Sexo: ${client.sexo}`)
        const email = Render.createElement("p", `Email: ${client.email}`, "card__info--email")

        const addressTitle = Render.createElement("h3", "Endereço")

        const street = Render.createElement("p", `Rua: ${client.endereco.rua}`)
        const number = Render.createElement("p", `Número: ${client.endereco.numero}`)
        const district = Render.createElement("p", `Bairro: ${client.endereco.bairro}`)
        const cep = Render.createElement("p", `Cep: ${client.endereco.cep}`)
        const city = Render.createElement("p", `Cidade: ${client.endereco.cidade}`)
        const state = Render.createElement("p", `Estado: ${client.endereco.estado}`)

        li.append(name, personalTitle, age, cpf, gender, email, addressTitle, street, number, district, cep, city, state)

        return li
    }

    static createElement(element, text, classe){
        const newElement = document.createElement(element)
        if (text){
            newElement.innerText = text
        }
        if (classe){
            newElement.classList.add(classe)
        }
        return newElement
    }
}

const clients = await ApiRequests.getClients()
console.log(clients)
Render.renderClients(clients)