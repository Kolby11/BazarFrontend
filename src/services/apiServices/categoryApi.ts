import { Category } from "../../data/interfaces";
import axios from "axios";

const baseApiUrl: String = "http://localhost:5000/api/v1/category/";
export async function getAllCategories(limit?: number): Promise<Category[] | null> {
   try {
      const response = await axios.get(`${baseApiUrl}`);
      return response.data.data;
   } catch (error) {
      console.error(error);
      return null;
   }
}
