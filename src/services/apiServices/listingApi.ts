import axios from "axios";
import { Listing } from "../../data/interfaces";

const baseApiUrl = "http://localhost:5000/api/v1/listing/";

export async function getAllListings(limit: number | undefined) {
  try {
    if (limit) {
      const response = await axios.get(`${baseApiUrl}limit=${limit}`);
      return response.data.data;
    } else {
      const response = await axios.get(`${baseApiUrl}`);
      return response.data.data;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function createListing(listing: Listing, img: File | undefined) {
  const sessionStr = localStorage.getItem("sessionStr");
  if (sessionStr === undefined) return false;
  try {
    const payload = {
      listing: listing,
      sessionStr: sessionStr,
    };
    const response = await axios.post(`${baseApiUrl}createListing/`, payload);
    return response.status === 201;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getListing(id: number) {
  try {
    const response = await axios.get(`${baseApiUrl}getListing/${id}`);
    return response.data.data[0];
  } catch {
    return undefined;
  }
}

export async function editListing(id: number, listing: Listing) {
  try {
    const response = await axios.put(`${baseApiUrl}editListing/${id}`, listing);
    return response.status === 200;
  } catch {
    return false;
  }
}

export async function deleteListing(id: number) {
  try {
    const response = await axios.delete(`${baseApiUrl}deleteListing/${id}`);
    return response.status === 200;
  } catch {
    return false;
  }
}

export async function getUserListings(id: number) {
  try {
    const response = await axios.get(`${baseApiUrl}/getUserListings/${id}`);
    return response.data.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
