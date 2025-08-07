import instance from "./axios";

const auth = {
    Sign: async (data) => {
        const res = await instance.post('/auth/signup/', data)
        return res
    },
    login: async (data) => {
        const res = await instance.post('/auth/login/', data)
        return res
    },
    me: async () => {
        const res = await instance.get('/auth/me/')
        return res
    }
}

export default auth;