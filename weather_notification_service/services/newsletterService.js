const Subscriber = require('../models/subscriber');
const SentNewsletter = require('../models/sentNewsletter');
const { fetchWeatherData } = require('../controllers/weatherController');
const nodeCron = require('node-cron');

const sendNewsletter = async () => {
  const subscribers = await Subscriber.findAll();

  for (const subscriber of subscribers) {
    const lastSent = await SentNewsletter.findOne({
      where: { email: subscriber.email },
      order: [['newsletterDate', 'DESC']],
    });

    let shouldSend = false;
    const now = new Date();
    const frequency = subscriber.frequency;

    if (!lastSent) {
      shouldSend = true;
    } else {
      const lastSentDate = new Date(lastSent.newsletterDate);
      switch (frequency) {
        case 'daily':
          shouldSend = now - lastSentDate >= 24 * 60 * 60 * 1000; // 24 hours
          break;
        case 'weekly':
          shouldSend = now - lastSentDate >= 7 * 24 * 60 * 60 * 1000; // 7 days
          break;
        case 'monthly':
          shouldSend = now - lastSentDate >= 30 * 24 * 60 * 60 * 1000; // 30 days
          break;
      }
    }

    if (shouldSend) {
      const weatherData = await fetchWeatherData();
      // Lógica de envio de email com weatherData
      console.log(`Enviando boletim para ${subscriber.email}`);

      await SentNewsletter.create({
        email: subscriber.email,
        newsletterDate: now,
      });
    }
  }
};

// Agendamento de tarefa: rodando a cada hora
nodeCron.schedule('0 * * * *', sendNewsletter);
