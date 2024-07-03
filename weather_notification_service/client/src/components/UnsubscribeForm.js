
import React, { useState } from 'react';
import axios from 'axios';

const UnsubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.delete('/api/unsubscribe', { data: { email } });
    setEmail('');
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
      <button type="submit">Unsubscribe</button>
    </form>
  );
};

export default UnsubscribeForm;
