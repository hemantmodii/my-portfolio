import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VisitCounter: React.FC = () => {
  const [visitCount, setVisitCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null); // Optional error state

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await axios.get('https://api.countapi.xyz/hit/hemantmodi.com/visit-counter');
        if (response.data && typeof response.data.value === 'number') {
          setVisitCount(response.data.value);
        } else {
          throw new Error('Invalid response data');
        }
      } catch (error) {
        console.error('Error fetching visit count:', error);
        setError('Failed to fetch visit count'); // Display an error message if needed
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <div>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <h2>Website Visits: {visitCount}</h2>
      )}
    </div>
  );
};

export default VisitCounter;
