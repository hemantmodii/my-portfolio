import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    axios.get('https://api.countapi.xyz/hit/hemantmodi.com/visit-counter')
      .then(response => {
        setVisitCount(response.data.value);
      })
      .catch(error => {
        console.error('Error fetching visit count:', error);
      });
  }, []);

  return (
    <div>
      <h2>Website Visits: {visitCount}</h2>
    </div>
  );
};

export default VisitCounter;
