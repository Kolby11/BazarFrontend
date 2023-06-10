import { Listing } from "../../data/interfaces";
import axios from "axios";

const baseApiUrl: String = "http://localhost:5000/api/v1/listing/";

export async function getAllListings(limit?: number): Promise<Listing[] | undefined> {
   try {
      if (limit) {
         const response = await axios.get(`${baseApiUrl}limit=${limit}`);
         console.log(response.data);
         return response.data.data;
      } else {
         const response = await axios.get(`${baseApiUrl}`);
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
      const response = await axios.post(`${baseApiUrl}createListing`, JSON.stringify(listing));
      return response.status === 201;
   } catch (error) {
      console.error(error);
      return false;
   }
}

export async function getListing(id: number): Promise<Listing | undefined> {
   try {
      const response = await axios.get(`${baseApiUrl}getListing/${id}`);
      return response.data.data[0];
   } catch {
      return undefined;
   }
}

export async function editListing(id: number, listing: Listing): Promise<boolean> {
   try {
      const response = await axios.put(`${baseApiUrl}editListing/${id}`, JSON.stringify(listing));
      return response.status === 200;
   } catch {
      return false;
   }
}
export async function deleteListing(id: number): Promise<boolean> {
   try {
      const response = await axios.delete(`${baseApiUrl}deleteListing/${id}`);
      return response.status === 200;
   } catch {
      return false;
   }
}

export async function getUserListings(id: Number): Promise<Listing[] | undefined> {
   try {
      const response = await axios.get(`${baseApiUrl}/getUserListings/${id}`);
      return response.data.data;
   } catch (error) {
      console.error(error);
      return undefined;
   }
}
