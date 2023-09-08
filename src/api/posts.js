import axios from "axios";

const baseURL = "https://github.com/M-Saad-0/react-blog-post/blob/main/data/db.json";

// Get the data from db.json
const getData = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

// Post data to db.json
const postData = async (data) => {
  const response = await axios.post(baseURL, data);
  return response.data;
};

// Delete data from db.json
const deleteData = async (id) => {
  const response = await axios.delete(`${baseURL}/${id}`);
  return response.data;
};

export { getData, postData, deleteData };
