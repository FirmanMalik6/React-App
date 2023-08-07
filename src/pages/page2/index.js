import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/table';

const Page2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const jsonData = await response.json();
      setData(jsonData.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 align="center" className="pt-4">Page 2</h1>
      <TableComponent data={data} />;
    </div>
  )
};

export default Page2;
