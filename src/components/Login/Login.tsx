import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import "./styles/login.css"
import { loginUser } from '../../apiServices/registerApi';

const Login = () => {
  const [formData, setFormData] = useState({
    prihlasovacieMeno: '',
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
    console.log(formData);
    console.log({ username: formData.prihlasovacieMeno, password: formData.heslo })
    const authId = await loginUser({ username: formData.prihlasovacieMeno, password: formData.heslo });
    console.log(authId);
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
      <input type="submit" value="Submit" />
    </form>
    )
}

export default Login;