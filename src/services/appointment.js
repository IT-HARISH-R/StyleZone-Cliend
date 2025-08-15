import instance from "./axios"

const appointment = {
    allAppointment: async (date) => {
        const res = await instance.get(`/appointments`, {
            params: { date } // send ?date=YYYY-MM-DD
        });
        return res;
    },
    bookAppointment: async (data) => {
        const res = await instance.post('/appointments', data)
        return res
    }
}

export default appointment;