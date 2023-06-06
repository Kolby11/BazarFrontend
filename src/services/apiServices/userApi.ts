import axios from "axios";
import { Listing, User } from "../../data/interfaces";

const baseUserApiUrl: String = "http://localhost:5000/api/v1/user/";

export async function getUserData(id: Number): Promise<User | undefined> {
   try {
      const response = await axios.get(`${baseUserApiUrl}getUser/${id}`);
      return response.data.data;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}
