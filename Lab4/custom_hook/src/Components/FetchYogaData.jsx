import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css'; // Optional if you want to reuse existing styles

const FetchYogaData = () => {
  const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
  console.log(data);

  return (
    <>
      <ul className="list_data_main">
        <h1>Yoga Benefits</h1>
        {data && data.map((item, index) => (
          <li key={index} className="list_data">
            <h3>{item.name}</h3>
            <p><strong>Category:</strong> {item.category}</p>
            <p><strong>Benefits:</strong> {item.benefits}</p>
            <p><strong>Best Time:</strong> {item.best_time}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchYogaData;