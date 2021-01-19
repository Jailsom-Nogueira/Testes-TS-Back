import { validateEmptyProperties, ValidateEmptyPropertiesOutput } from "./validateEmptyProperties";

const meuObjetoValido = {
    nome: "João",
    idade: 23,
    email: "joao@labenu.com.br"
};

const meuObjetoInvalido = {
    nome: "",
    idade: 23,
    email: "joao@labenu.com.br"
};

const validacao1 = validateEmptyProperties(meuObjetoValido);
const validacao2 = validateEmptyProperties(meuObjetoInvalido);

function testaValidacao(validacao: ValidateEmptyPropertiesOutput): string{

    if(validacao.isValid){
        return "O objeto é válido"
    }
        return "O objeto é inválido";
}

console.log("input 1:", testaValidacao(validacao1));
console.log("input 2:", testaValidacao(validacao2));


