import axios from "axios";
import { Listing } from "../../data/interfaces";

const baseApiUrl: String = "http://localhost:5000/api/v1/listing/";

export async function getUserListings(id: Number): Promise<Listing[] | undefined> {
   try {
      const response = await axios.post(`${baseApiUrl}/getUserListings/${id}`);
      console.warn(response.data);
      return response.data;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}

export async function getUserData();
