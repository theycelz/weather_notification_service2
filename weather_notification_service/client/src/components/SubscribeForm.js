// client/src/components/SubscribeForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/subscribe', { email, frequency });
    setEmail('');
    setFrequency('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <select
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
        required
      >
        <option value="" disabled>Select Frequency</option>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
