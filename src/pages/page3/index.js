import React, { useEffect, useState } from 'react';
import TableComponent from '../../components/table';

const Page3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const dummyData = [
        { id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
        { id: 3, name: 'Bob Johnson', age: 40, email: 'bob.johnson@example.com' },
      ];
      setData(dummyData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 align="center" className="pt-4">Page 3</h1>
      <TableComponent data={data} />;
    </div>
  )
};

export default Page3;