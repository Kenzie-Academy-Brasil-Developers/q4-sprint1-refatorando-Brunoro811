import * as yup from "yup"

const companySchema = yup.object().shape({
    name: yup
      .string("Formato de nome inválido")
      .required("Campo de name obrigátorio"),
    cnpj: yup
      .string("Formato de cnpj inválido")
      .matches(/^[0-9]{14}$/)
      .required("Campo de cnpj obrigátorio"),
    password: yup
      .string("Formato de senha inválido")
      .required("Campo de senha obrigátorio"),
    cep: yup
      .string("Formato de cep inválido")
      .required("Campo de cep obrigátorio"),
    address: yup
      .string("Formato de endereço inválido")
      .required("Campo de endereço obrigátorio"),
    number: yup
      .number("Formato de número inválido")
      .required("Campo de número obrigátorio")
      .positive("Formato de número inválido")
      .integer("Formato de número inválido"),
    state: yup
      .string("Formato de estado inválido")
      .matches(/^[A-Z]{2}$/)
      .required("Campo de estado obrigátorio"),
    city: yup
      .string("Formato de cidade inválido")
      .required("Campo de cidade obrigátorio"),
  });

  export default companySchema;