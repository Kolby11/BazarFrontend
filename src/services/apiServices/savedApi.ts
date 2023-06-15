import { Listing } from "../../data/interfaces";
import axios from "axios";

const baseApiUrl: String = "http://localhost:5000/api/v1/saved/";

export async function getUserSavedListings(
  sessionStr: string
): Promise<Listing[] | undefined> {
  try {
    const response = await axios.get(
      `${baseApiUrl}savedListings/${sessionStr}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

export async function saveListing(
  sessionStr: string,
  listingId: number
): Promise<boolean> {
  try {
    const body = {
      data: {
        sessionStr: sessionStr,
        listingId: listingId,
      },
    };
    console.log(body);
    const response = await axios.post(`${baseApiUrl}saveListing/`, body);
    return response.status === 201;
  } catch (error) {
    console.error(error);
    return false;
  }
}
