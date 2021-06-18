import axios from "axios";

const api = axios.create({
	baseURL: "https://data.cityofchicago.org/",
});

export default api;