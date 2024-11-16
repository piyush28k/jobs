import React, { useEffect, useState } from 'react';

const JobHistory = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = 'https://b0askarm28-adzuna-v1.p.rapidapi.com/jobs/%7Bcountry%7D/history?location0=location0%3DUK%26location1%3DSouth%20East%20England%26location2%3DSurrey';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '9fef372892mshd626c5869b5d096p1c3190jsn9e48525df8fa',
        'x-rapidapi-host': 'baskarm28-adzuna-v1.p.rapidapi.com'
      }
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json(); // assuming the API returns JSON
        setData(result);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Job History Data</h1>
      {error && <p>Error fetching data: {error.message}</p>}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default JobHistory;
