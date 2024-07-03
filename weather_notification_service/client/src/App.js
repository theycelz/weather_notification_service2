
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './components/Chart';
import DataList from './components/DataList';
import SubscribeForm from './components/SubscribeForm';
import UnsubscribeForm from './components/UnsubscribeForm';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/weather-data');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather Notification Service</h1>
      <SubscribeForm />
      <UnsubscribeForm />
      <DataList data={data} />
      <Chart data={data} />
    </div>
  );
};

export default App;
