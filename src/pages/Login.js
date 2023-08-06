import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

export const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const history = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history(`/home?name=${formData.name}&password=${formData.password}`);
  };

  return (
    <div className='w-100 vh-100 d-flex align-items-center justify-content-center'>
      <form class="waduh" onSubmit={handleSubmit}>
        <div class="row">
          <div class="col">
            <img src='https://img.freepik.com/free-vector/illustration-character-civil-servants-indonesia-wearing-work-uniforms_10045-683.jpg?w=740&t=st=1691035983~exp=1691036583~hmac=289f1905e91750fae25b56de0fd9ea1c3f9dbdcffe88c6fe2be291e576809b07' alt='Gambar'></img>
          </div>

          <div class="d-grid gap-2 col-6 mx-auto">
            <div class="w-75 p-6">
              <h2>Log In</h2>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label" htmlFor="name">Name:</label>
                <input type="text" class="form-control" id="name" name="name" autoComplete='off' value={formData.name} onChange={handleChange} />
              </div>
            </div>

            <div class="w-75 p-6"> {/* untuk menyamakan width antara textbox dan button */}
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label" htmlFor="password">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={handleChange} />
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-warning" type='submit'>Send</button >
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;