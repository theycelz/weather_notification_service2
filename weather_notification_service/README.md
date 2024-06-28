Aqui está o README atualizado e melhorado para refletir as alterações e melhorias feitas na aplicação:

---

# Weather Notification Service

Este projeto é um serviço RESTful API que permite o cadastro de pessoas interessadas em receber boletins informativos sobre o tempo. A API permite as seguintes operações:

1. Realizar o registro para recebimento de atualizações: diárias, semanais e mensais.
2. Descadastrar-se para interromper o recebimento das notificações.

O serviço integra-se com um serviço de dados externo para coletar dados meteorológicos e enviar as informações aos usuários cadastrados.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite
- Swagger
- Axios
- Body-parser
- Docker
- Docker Compose
- NGINX

## Instalação e Execução

### Pré-requisitos

- Docker
- Docker Compose

### Passo a Passo

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/theycelz/weather_notification_service2.git
   cd weather_notification_service2
   ```

2. **Construa e inicie os contêineres**:

   ```bash
   docker-compose up --build
   ```

3. **Acesse a aplicação**:

   - A aplicação estará disponível em [http://localhost](http://localhost)
   - A documentação do Swagger estará disponível em [http://localhost/swagger](http://localhost/swagger)

4. **Parar os contêineres**:

   Para parar os contêineres, você pode usar `Ctrl+C` no terminal onde o `docker-compose` está rodando ou executar:

   ```bash
   docker-compose down
   ```

## Organização do Projeto

```plaintext
weather_notification_app/
├── .idea/
├── config/
│   └── database.js
├── controllers/
│   ├── subscriberController.js
│   └── weatherController.js
├── models/
│   ├── subscriber.js
│   └── sentNewsletter.js
├── routes/
│   └── index.js
├── services/
│   └── newsletterService.js
├── swagger/
│   └── swagger.json
├── app.js
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── package.json
└── README.md
```

## Descrição dos Arquivos

- **config/database.js**: Configuração do Sequelize para conexão com o banco de dados SQLite.
- **controllers/subscriberController.js**: Controlador para gerenciar as operações de cadastro e descadastro de assinantes.
- **controllers/weatherController.js**: Controlador para buscar dados meteorológicos do serviço externo.
- **models/subscriber.js**: Modelo Sequelize para representar os assinantes.
- **models/sentNewsletter.js**: Modelo Sequelize para registrar os boletins enviados.
- **routes/index.js**: Define as rotas da API.
- **services/newsletterService.js**: Serviço que gerencia o envio periódico dos boletins.
- **swagger/swagger.json**: Documentação da API utilizando Swagger.
- **app.js**: Ponto de entrada da aplicação.
- **Dockerfile**: Configuração do Docker para construir a imagem da aplicação.
- **docker-compose.yml**: Configuração do Docker Compose para orquestrar os serviços da aplicação.
- **nginx.conf**: Configuração do NGINX como API Gateway.
