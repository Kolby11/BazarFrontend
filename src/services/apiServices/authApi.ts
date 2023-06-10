import { LoginCredentials, SecureUser } from "../../data/interfaces";
import axios from "axios";

export async function registerUser(user: SecureUser): Promise<boolean> {
   try {
      const body = {
         data: {
            username: user.username,
            password: user.password,
            email: user.email,
            phone_number: user.phone_number,
         },
      };
      const response = await axios.post("http://localhost:5000/api/v1/auth/register/", body);
      console.log(response);
      if (response.status === 200) return true;
      return false;
   } catch (error) {
      console.error(error);
      return false;
   }
}

export async function loginUser(credentials: LoginCredentials): Promise<boolean> {
   try {
      const body = {
         data: {
            email: credentials.email,
            password: credentials.password,
         },
      };

      const response = await axios.post("http://localhost:5000/api/v1/auth/login/", body);
      localStorage["sessionStr"] = response.data.sessionStr;
      localStorage["userId"] = response.data.userId;
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}
