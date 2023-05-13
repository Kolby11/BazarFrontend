import { LoginCredentials, SecureUser } from "../data/interfaces";
import axios from "axios";

export async function registerUser(user: SecureUser): Promise<Number | null>{
    try{
        const response = await axios.post("http://localhost:5000/api/v1/service/register/", user)
        return response.data
    }
    catch(error){
        console.error(error)
        return null
    }
    
}

export async function loginUser(credentials: LoginCredentials): Promise<Number | null> {
   try {
      const response = await axios.post("http://localhost:5000/api/v1/service/login/", credentials);


      console.warn(response.data.authId);
      return response.data.authId;
    } catch (error) {
      console.error(error);
      return null;
    }
}