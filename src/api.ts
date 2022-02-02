import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_TOKEN);
    if (!token) {
        return config;
    }
    return { ...config, headers: { ...config.headers, Authorization: token } }
})

axios.interceptors.request.use(undefined, (error) => {
    if (error.response.data.code === 9101) {
        localStorage.removeItem(LS_TOKEN);
        window.location.href = "/login"
    }
    return Promise.reject(error);
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


export const logout = () => {
    localStorage.removeItem(LS_TOKEN);
}

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





