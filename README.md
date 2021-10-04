# desafio_backend_huia

## INSTALANDO DEPENDENCIAS

    bcryptjs
    express
    jsonwebtoken
    sequelize
    sqlite3

`npm i`</br>
`npm -D i`

## REALIZANDO CRIAÇAO E MIGRAÇAO DATABASE

`npx sequelize-cli db:migrate`

## MIDDLEWARE DE AUTENTICAÇAO

`auth` `[/business]`

## ROTAS

`createUser` `[/create/business/user]` Rota para criação de Negocios/Vendedores <br/>
`loginUser` `[/login/user/business]` Rota para realização do login <br/>

---

**Parametros Business - `createUser`**

|            Name | Required |  Type  | Description                                                                      |
| --------------: | :------: | :----: | -------------------------------------------------------------------------------- |
| `name_business` | required | string | Está variavel e para indicar o nome do comercio/negocio                          |
|      `cpf_cnpj` | required | string | Está variavel ajuda na identificação, para assim poder criar um nove comercio.   |
|          `name` | required | string | Está variavel ajuda na identificação do usuario atraves de seu nome.             |
|         `login` | required | string | identificação para realizar o login na loja.                                     |
|         `email` | required | string | identificação para realizar o login na loja e um dado para recuperação de senha. |
|      `password` | required | string | senha para realizar a autenticação do usuario.                                   |

## Request

    // request para criaçao de usuario - /create/business/user
    {
      name_business:Jhons,
      cpf_cnpj:12345678911,
      name:jones,
      login:12345678911,
      email:leo@leos.com,
      password:12345leo,
    }

    // request para realizar o login - /login/user/business
    // login pode ser feito por email ou login
    {
      login:12345678911 || leo@leos.com,
      password:12345leo,
    }

## Response

```
// caso não houver usuario criado.
// ao inves de salvar a senha pura, é salvo somente a hash para comparação.

{
  "msg": "Usuario criado!",
  "data": {
    "id": "375b77d0-24b3-11ec-86aa-497960a3141e",
    "name": "jones",
    "login": "12345678911",
    "email": "leo@leos.com",
    "password": "12345leo",
    "id_business": "3758dfc0-24b3-11ec-86aa-497960a3141e",
    "updatedAt": "2021-10-04T01:34:28.813Z",
    "createdAt": "2021-10-04T01:34:28.813Z",
    "password_hash": "$2a$08$lV3JubyXF2MwDQ8I0BcpH.0JZzTlAcoCoIoHJevI3i0OAqPBzy7A2"
  },
  "createdUser": true
}

// caso o login e senha estiverem validos, é retornado o token JWT
// dados retornados só para teste.
{
      "loginUser": {
        "id": "375b77d0-24b3-11ec-86aa-497960a3141e",
        "name": "jones",
        "login": "12345678911",
        "email": "leo@leos.com",
        "password_hash": "$2a$08$lV3JubyXF2MwDQ8I0BcpH.0JZzTlAcoCoIoHJevI3i0OAqPBzy7A2",
        "id_business": "3758dfc0-24b3-11ec-86aa-497960a3141e",
        "createdAt": "2021-10-04T01:34:28.813Z",
        "updatedAt": "2021-10-04T01:34:28.813Z"
      },
        "token": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjoiMzc1Yjc3ZDAtMjRiMy0xMWVjLTg2YWEtNDk3OTYwYTMxN
        DFlIiwiaWRfYnVzaW5lc3MiOiIzNzU4ZGZjMC0yNGIzLTExZWMtODZhYS00OTc5NjBhMzE0MWUiLCJpYXQiOjE2MzMzMTEyNzAsImV4cCI6MTYzMzM5NzY3MH0.KQlz2wxcCd92DHcPbckcs-                   hruwT82GVPgMYfq6xkmOo"
     }
```
