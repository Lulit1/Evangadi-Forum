import axios from "axios";

const instance = axios.create({
	// baseURL: "http://localhost:4500", // api url
	baseURL: "https://evangadi-forum-axzr.onrender.com",

	withCredentials: true,
});

export default instance;
