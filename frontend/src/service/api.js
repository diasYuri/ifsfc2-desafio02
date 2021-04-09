import axios from "axios";

const URL_API = "http://localhost:3000/routes";

export default async function api() {
  try {
    const response = await axios.get(URL_API);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
