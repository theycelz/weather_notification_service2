const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const routes = require('./routes');
const swaggerConfig = require('./swagger/swaggerConfig');
const newsletterService = require('./services/newsletterService'); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', routes);
swaggerConfig(app);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    newsletterService.sendNewsletter(); 
});
