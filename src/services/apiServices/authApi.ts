import { LoginCredentials, SecureUser } from "../../data/interfaces";
import axios from "axios";

const baseApiUrl="http://localhost:5000/api/v1/auth/"

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
      const response = await axios.post(`${baseApiUrl}register/`, body);
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

      const response = await axios.post(`${baseApiUrl}login/`, body);
      localStorage["sessionStr"] = response.data.sessionStr;
      localStorage["userId"] = response.data.userId;
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}
export async function logoutUser(): Promise<boolean> {
   const sessionStr = localStorage["sessionStr"]
   if (!sessionStr){
      return false
   }
   localStorage.removeItem("sessionStr")
   localStorage.removeItem("userId")
   try {
      const response = await axios.post(`${baseApiUrl}logoout/`, sessionStr);
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
}
