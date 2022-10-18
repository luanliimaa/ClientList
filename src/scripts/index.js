import { ApiRequests } from "./ApiRequests.js";

class Render{
    static renderClients(array){
        const ul = document.getElementById("clientList")

<<<<<<< HEAD
        array.forEach((client) => {
            const card = Render.renderCard(client)
=======
        ul.innerHTML = ""

        array.forEach((client) => {
            const card = Render.renderCard(client)
            ul.append(card)
>>>>>>> 4a329da2d9a3c69831475fef92f97f5f04c75171
        })
    }

    static renderCard(client){
<<<<<<< HEAD
        const li = document.createElement("li")
        li.classList.add("card")

        const h2 = document.createElement("h2")
        h2.innerText = client.nome
        
        const h3 = document.createElement("h3")
        h3.innerText = "Dados Pessoais"

=======
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
>>>>>>> 4a329da2d9a3c69831475fef92f97f5f04c75171
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

<<<<<<< HEAD
/*

    <li class="card">
        <h2>Renato</h2>
        <h3>Dados Pessoais</h3>
        <ul class="card__info">
            <li>idade": 72</li>
            <li>cpf: 46469467342</li>
            <li>sexo: Masculino</li>
            <li class="card__info--email">email: guilhermeemanuelbarbosa@toyota.com.br</li>
        </ul>
        <h3>Endereço</h3>
        <ul class="card__info">
            <li>cep: 38055292</li>
            <li>rua: Rua Dois</li>
            <li>numero: 698</li>
            <li>bairro: Residencial Veneza</span>
            <li>cidade: Uberaba</li>
            <li>estado: MG</li>
        </ul>
    </li>

*/

ApiRequests.getClients()
=======


const clients = await ApiRequests.getClients()
Render.renderClients(clients)
>>>>>>> 4a329da2d9a3c69831475fef92f97f5f04c75171
