import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/home.css';

export const Home = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const password = queryParams.get('password');

  return (
    <div className='w-100 vh-100 d-flex align-items-center justify-content-center'>
      <div className='wadidaw'>
        <div class='d-grid gap-2 col-6 mx-auto'>
          <div class="item">
            <h1>Home Page</h1>
            <p>Name: {name}</p>
            <p>Password: {password}</p>
          </div>
          <div class="sticky-sm-bottom" align='center'>
            <a href='/'><button type="button" class="btn btn-warning">Back</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;