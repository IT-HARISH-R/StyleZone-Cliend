import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import appointment from "../services/appointment";

const Booking = () => {
  const location = useLocation();
  const { date: passedDate, time: passedTime } = location.state || {};

  // Convert "10:00 AM" -> "HH:mm" 24-hour format
  const convertTo24Hour = (timeStr) => {
    if (!timeStr) return "";
    const [time, modifier] = timeStr.split(" ");
    let [hours, minutes] = time.split(":");
    if (modifier === "PM" && hours !== "12") {
      hours = String(parseInt(hours, 10) + 12);
    }
    if (modifier === "AM" && hours === "12") {
      hours = "00";
    }
    return `${hours.padStart(2, "0")}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: passedDate || "",
    slot: passedTime ? convertTo24Hour(passedTime) : "",
    service: "",
  });

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = ["Men's Haircut", "Beard Trim", "Hair Spa"];

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    const nextHour = new Date(today.getTime() + 60 * 60 * 1000);
    const hours = String(nextHour.getHours()).padStart(2, "0");
    const minutes = String(nextHour.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    setMinDate(formattedDate);
    setMinTime(formattedTime);

    setFormData((prev) => ({
      ...prev,
      date: passedDate || formattedDate,
      slot: passedTime ? convertTo24Hour(passedTime) : formattedTime,
    }));
  }, [passedDate, passedTime]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Merge date + time into a single datetime string
    const dateTime = `${formData.date} ${formData.slot}`;

    const bookingData = {
      ...formData,
      slot: dateTime, // send full datetime to backend
    };

    console.log("Booking submitted:", bookingData);

    try {
      const res = await appointment.bookAppointment(bookingData);
      console.log(res);
      setSubmitted(true);
    } catch (err) {
      console.log(err);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Book Your Appointment
        </h2>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            ✅ Booking submitted successfully! <br />
            You’ll receive a call confirmation soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
                placeholder="Enter phone number"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium">Select Service</label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
              >
                <option value="">-- Select --</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                required
                min={minDate}
                value={formData.date}
                readOnly={!!passedDate}
                onChange={handleChange}
                className={`w-full border px-3 py-2 rounded mt-1 ${passedDate ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
            </div>

            {/* Slot (Time) */}
            <div>
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                name="slot"
                required
                min={formData.date === minDate ? minTime : "00:00"}
                value={formData.slot}
                onChange={handleChange}
                readOnly={!!passedTime}
                className={`w-full border px-3 py-2 rounded mt-1 ${passedTime ? "bg-gray-100 cursor-not-allowed" : ""}`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
            >
              Book Appointment
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Booking;
