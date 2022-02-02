import axios from "axios"
import { BASE_URL } from "./base"

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups" | "favorites"
}


export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups"
    return axios.get(url, { params: data }).then(
        (response) => {
            return response.data
        }
    ).catch(e => console.error(e))
}