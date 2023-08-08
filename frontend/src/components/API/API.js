import Axios from "../Axios/Axios";

async function getAllTrottersAPI() {
  try {
    let result = await Axios.get("/players");
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function displayUserProfileAPI(data) {
  try {
    let result = await Axios.post(`/user-trotter`, data);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getAllTrottersAPI, displayUserProfileAPI };
