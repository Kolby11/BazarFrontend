import { Category } from "../data/interfaces";
import axios from "axios";

export async function getAllCategories(limit?: number): Promise<Category[] | null> {
   try {
      const response = await axios.get("http://localhost:5000/api/v1/category/");
      console.log(response.data);
      return response.data.data;
   } catch (error) {
      console.error(error);
      return null;
   }
}
