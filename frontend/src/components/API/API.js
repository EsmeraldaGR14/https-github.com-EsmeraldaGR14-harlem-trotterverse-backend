import Axios from "../Axios/Axios";

async function getAllPlayersAPI() {
  try {
    let result = await Axios.get("/players");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getAllPlayersAPI };
