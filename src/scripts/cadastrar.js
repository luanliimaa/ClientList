import { ApiRequests } from "./ApiRequests.js";
import { Toast } from "./Toastfy.js";

//Toast.create("Mata o cara mano!", "#FF0000", 10000)

class SignupClient{
    static createClient(){
        const formElement = document.querySelector("form")
        const btnSubmit = document.getElementById("submit")

        btnSubmit.addEventListener("click", async (event) => {
            event.preventDefault()
            
            const data = {
                "nome": formElement.name.value,
                "email": formElement.email.value,
                "sexo": formElement.gender.value,
                "idade": parseInt(formElement.age.value),
                "cpf": formElement.cpf.value,
                "endereco": {
                    "estado": formElement.state.value,
                    "cidade": formElement.city.value,
                    "bairro": formElement.strict.value,
                    "numero": formElement.number.value,
                    "rua": formElement.street.value,
                    "cep": formElement.cep.value
                }
            }
    
            console.log(data)
            const res = await ApiRequests.signUpClient(data)
            console.log(res)
        })

    }

}

SignupClient.createClient()