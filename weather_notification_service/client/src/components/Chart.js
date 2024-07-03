
import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const Chart = ({ data }) => {
  Chart.propTypes = {
    data: PropTypes.array.isRequired,
  };
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Weather Data',
        data: data.map(entry => entry.value),
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default Chart;
