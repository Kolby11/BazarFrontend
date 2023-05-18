import React, { ChangeEvent, FormEvent, useState } from 'react';
import { registerUser } from '../../apiServices/serviceApi';
import { SecureUser } from '../../data/interfaces';

const RegistrationForm = () => {
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
    const user: SecureUser={ id:undefined, username: formData.prihlasovacieMeno,
      password: formData.heslo,
      phone_number: formData.telefonneCislo,
      email: formData.email }
    const request = await registerUser(user);
    console.log(user)
    console.warn(request)

  };

  return (
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
  );
};

export default RegistrationForm;
