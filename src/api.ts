import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_TOKEN);
    if (!token) {
        return config;
    }
    return { ...config, headers: { ...config.headers, Authorization: token } }
})

export const BASE_URL = "https://api-dev.domecompass.com";
export const LS_TOKEN = "login_token"

interface LoginRequest {
    email: string;
    password: string;
}

interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    }
    token: string;
    user: User;
}

interface User {
    id: number
    first_name: string;
    middle_name: string;
    last_name: string;
    role: "admin" | "staff"
}

export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    return axios.post<LoginResponse>(url, data).then((response) => {
        console.log(response)
        console.log(response.data.token)
        localStorage.setItem(LS_TOKEN, response.data.token);
        return response.data.user
    })
}

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: number;
    status: "all-groups" | "favorites"
}


export const fetchGroups = (data: GroupRequest) => {
    const url = BASE_URL + "/groups"
    //const token = localStorage.getItem(LS_TOKEN)
    axios.get(url, { params: data }).then(
        (response) => {
            console.log(response)
        }
    ).catch(e => console.error(e))
}


