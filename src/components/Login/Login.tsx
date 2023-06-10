import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./styles/login.css"
import { loginUser } from '../../services/apiServices/authApi';
import { LoginCredentials } from '../../data/interfaces';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    heslo: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginCredentials: LoginCredentials = { email: formData.email, password: formData.heslo }
    const success = await loginUser(loginCredentials);
    if (success && localStorage["sessionStr"]) {
      window.alert("Prihlásenie úspešné");
      navigate("/profile");
    }
  };

  return (
    <div>
      <Navbar />
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Prihlásenie</h1>
          <label htmlFor="prihlasovacie meno">Email:</label>
          <input
            type="text"
            id="prihlasovacie meno"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="heslo">Heslo:</label>
          <input
            type="password"
            id="heslo"
            name="heslo"
            required
            value={formData.heslo}
            onChange={handleInputChange}
          />
          <input type="submit" value="Prihlásiť sa" />
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Login;
