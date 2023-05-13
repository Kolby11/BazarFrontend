import React, { ChangeEvent, FormEvent, useState } from 'react';

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Further processing or API submission
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default RegistrationForm;
