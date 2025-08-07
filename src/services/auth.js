import instance from "./axios";

const auth = {
    Sign: async (data) => {
        const res = await instance.post('/auth/signup/',data)
        return res
    }
}

export default auth;