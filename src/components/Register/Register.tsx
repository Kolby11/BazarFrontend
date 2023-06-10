import React, { ChangeEvent, FormEvent, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/apiServices/authApi';
import { SecureUser } from '../../data/interfaces';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

import "./styles/register.css"

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prihlasovacieMeno: '',
    heslo: '',
    telefonneCislo: '',
    email: '',
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
    const user: SecureUser = {
      id: undefined, username: formData.prihlasovacieMeno,
      password: formData.heslo,
      phone_number: formData.telefonneCislo,
      email: formData.email
    }
    const success = await registerUser(user);
    if (success) {
      window.alert("Registrácia úspešná");
      navigate("/login");
    }

  };

  return (
    <div>
      <Navbar />
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h1>Registrácia</h1>
          <label htmlFor="prihlasovacie meno">Prihlasovacie meno:</label>
          <input
            type="text"
            id="prihlasovacie meno"
            name="prihlasovacieMeno"
            required
            value={formData.prihlasovacieMeno}
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
          <label htmlFor="e-mail">E-mail:</label>
          <input
            type="text"
            id="e-mail"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="telefonne cislo">Telefónne číslo:</label>
          <input
            type="text"
            id="telefonne cislo"
            name="telefonneCislo"
            required
            value={formData.telefonneCislo}
            onChange={handleInputChange}
          />
          <input type="submit" value="Registrovať" />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;
