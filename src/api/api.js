import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a0edf3d7-d19e-417b-8542-93ff8551edb4"
    }
});

export const userAPI = {
    getUser(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getFollow(id){
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    getUnFollow(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getUser(id){
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id){
        return instance.get(`/profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status){
        return instance.put(`/profile/status`, {status})
            .then(response => response.data)
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`/profile/photo`, formData, {
              header: {
                  'Content-Type': 'multipart/form-data'
              }
            })
            .then(response => response.data)
    },
    saveProfile(profile){
        return instance.put(`/profile`, profile)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}