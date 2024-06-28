const Subscriber = require('../models/subscriber');

exports.subscribe = async (req, res) => {
  try {
    const { email, frequency } = req.body;
    const newSubscriber = await Subscriber.create({ email, frequency });
    res.status(201).json({ message: 'Subscribed successfully!', subscriber: newSubscriber });
  } catch (error) {
    res.status(400).json({ message: 'Subscription failed!', error: error.message });
  }
};

exports.unsubscribe = async (req, res) => {
  try {
    const { email } = req.body;
    const subscriber = await Subscriber.findOne({ where: { email } });
    if (subscriber) {
      await subscriber.destroy();
      res.status(200).json({ message: 'Unsubscribed successfully!' });
    } else {
      res.status(404).json({ message: 'Subscriber not found!' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Unsubscription failed!', error: error.message });
  }
};
