import { Listing } from "../../data/interfaces";
import axios from "axios";

const baseApiUrl: String = "http://localhost:5000/api/v1/saved/";

export async function getUserSavedListings(sessionStr: string): Promise<Listing[] | undefined> {
   try {
      const response = await axios.get(`${baseApiUrl}/getUserSavedListings/${sessionStr}`);
      return response.data.data;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}
