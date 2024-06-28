# Weather Notification Service

Este projeto é um serviço RESTful API que permite o cadastro de pessoas interessadas em receber boletins informativos sobre o tempo. A API permite as seguintes operações:

1. Realizar o registro para recebimento de atualizações: semanais, quinzenais, mensais e semestrais.
2. Descadastrar-se para interromper o recebimento das notificações.

Além disso, o serviço planeja a integração com um serviço de dados externo para coletar dados meteorológicos e enviar as informações aos usuários cadastrados.

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- SQLite
- Swagger
- Axios
- Body-parser

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/weather_notification_service.git
   cd weather_notification_service

## Organização
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
├── services/  // Nova pasta
│   └── newsletterService.js  
├── swagger/
│   └── swagger.json
├── app.js
├── package.json
└── README.md
