import axios from "axios";
const HTTP = axios.create({
   baseURL: import.meta.env.VITE_API_URL,
});

export const request1 = async () => await HTTP.get("/route1");

export const request2 = async (data: { token: string; _id: string }) =>
   await HTTP.post("/route2", data);
