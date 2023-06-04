import { Listing } from "../../data/interfaces";
import axios from "axios";

export async function getAllListings(limit?: number): Promise<Listing[] | undefined> {
   try {
      if (limit) {
         const response = await axios.get(`http://localhost:5000/api/v1/listing/limit=${limit}`);
         console.log(response.data);
         return response.data.data;
      } else {
         const response = await axios.get("http://localhost:5000/api/v1/listing/");
         console.log(response.data);
         return response.data.data;
      }
   } catch (error) {
      console.error(error);
      return undefined;
   }
}

export async function createListing(listing: Listing): Promise<boolean> {
   try {
      const response = await axios.post(
         "http://localhost:5000/api/v1/listing/createListing",
         JSON.stringify(listing)
      );
      return response.status === 201;
   } catch (error) {
      console.error(error);
      return false;
   }
}

export async function getListing(id: number): Promise<Listing | null> {
   try {
      const response = await axios.get(`http://localhost:5000/api/v1/listing/getListing/${id}`);
      return response.data;
   } catch {
      return null;
   }
}

export async function editListing(id: number, listing: Listing): Promise<boolean> {
   try {
      const response = await axios.put(
         `http://localhost:5000/api/v1/listing/editListing/${id}`,
         JSON.stringify(listing)
      );
      return response.status === 200;
   } catch {
      return false;
   }
}
export async function deleteListing(id: number): Promise<boolean> {
   try {
      const response = await axios.delete(
         `http://localhost:5000/api/v1/listing/deleteListing/${id}`
      );
      return response.status === 200;
   } catch {
      return false;
   }
}

export {};
