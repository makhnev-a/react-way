import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "43c44c71-4889-4c8a-9a5f-3020a8a0ec48"
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    // auth/me
    loggin() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
};

export const authApi = {
    login(email, passport, rememberMe = false) {
        debugger
        return instance.post(`auth/login`, {email, passport, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`);
    },
};