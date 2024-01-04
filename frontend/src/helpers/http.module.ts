import axios from "axios";
import { baseUrl } from "@/constants/url.constant";

const httpModule = axios.create({
    baseURL: baseUrl,
});

export default httpModule;