import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const noteAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    console.log("DATA:", response.data);
    console.log("RESPONSE:", response);
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.resonse.data : e);
    return null;
  }
};

noteAPI.getAllNotes = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}notes/`));
};

noteAPI.getSingleNote = async (noteId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}notes/${noteId}/`));
};

export default noteAPI;
