import { ApiRequests } from "./ApiRequests.js";

class Render{
    static renderClients(array){
        const ul = document.getElementById("clientList")

        array.forEach((client) => {
            const card = Render.renderCard(client)
        })
    }

    static renderCard(client){
        const li = document.createElement("li")
        li.classList.add("card")

        const h2 = document.createElement("h2")
        h2.innerText = client.nome
        
        const h3 = document.createElement("h3")
        h3.innerText = "Dados Pessoais"

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