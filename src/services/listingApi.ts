import { Listing } from "../data/types";
import axios from "axios";

export async function getAllListings(limit?: number): Promise<Listing[] | null> {
   try {
      if (limit) {
         const response = await axios.get(`http://localhost:5000/api/v1/listings/limit=${limit}`);
         console.log(response.data);
         return response.data.data;
      } else {
         const response = await axios.get("http://localhost:5000/api/v1/listings/");
         console.log(response.data);
         return response.data.data;
      }
   } catch (error) {
      console.error(error);
      return null;
   }
}

export async function createListing(listing: Listing): Promise<boolean> {
   try {
      const response = await axios.post(
         "http://localhost:5000/api/v1/listings/createListing",
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
      const response = await axios.get(`http://localhost:5000/api/v1/listings/getListing/${id}`);
      return response.data;
   } catch {
      return null;
   }
}

export async function editListing(id: number, listing: Listing): Promise<boolean> {
   try {
      const response = await axios.put(
         `http://localhost:5000/api/v1/listings/editListing/${id}`,
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
         `http://localhost:5000/api/v1/listings/deleteListing/${id}`
      );
      return response.status === 200;
   } catch {
      return false;
   }
}

export {};
