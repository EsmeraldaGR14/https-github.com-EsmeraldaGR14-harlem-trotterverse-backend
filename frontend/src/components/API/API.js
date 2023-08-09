import Axios from "../Axios/Axios";

async function getAllTrottersAPI() {
  try {
    let result = await Axios.get("/players");
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getSingleTrotterAPI(id) {
  try {
    let result = await Axios.get(`/user-player/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function updateTrotterPlayerAPI(id, data) {
  try {
    await Axios.put(`/user-player/${id}`, data);
  } catch (error) {
    console.log(error);
  }
}

export { getAllTrottersAPI, getSingleTrotterAPI, updateTrotterPlayerAPI };
