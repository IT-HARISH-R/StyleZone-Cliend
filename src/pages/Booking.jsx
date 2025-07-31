import React, { useState, useEffect } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [minDate, setMinDate] = useState("");
  const [minTime, setMinTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const services = ["Men's Haircut", "Beard Trim", "Hair Spa"];

  useEffect(() => {
    // Set today's date as default & min date
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const formattedDate = `${yyyy}-${mm}-${dd}`;

    // Set default time as current time + 1 hour
    const nextHour = new Date(today.getTime() + 60 * 60 * 1000);
    const hours = String(nextHour.getHours()).padStart(2, "0");
    const minutes = String(nextHour.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;

    setFormData((prev) => ({
      ...prev,
      date: formattedDate,
      time: formattedTime,
    }));
    setMinDate(formattedDate);
    setMinTime(formattedTime);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If user selects a future date, reset minTime
    if (name === "date") {
      const todayStr = new Date().toISOString().split("T")[0];
      if (value > todayStr) {
        setMinTime("00:00");
      } else {
        // If user goes back to today, apply the +1hr rule again
        const now = new Date();
        const nextHour = new Date(now.getTime() + 60 * 60 * 1000);
        const h = String(nextHour.getHours()).padStart(2, "0");
        const m = String(nextHour.getMinutes()).padStart(2, "0");
        setMinTime(`${h}:${m}`);
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Book Your Appointment</h2>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            ✅ Booking submitted successfully! <br />
            You’ll receive a WhatsApp confirmation soon.
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
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium">Time</label>
              <input
                type="time"
                name="time"
                required
                min={formData.date === minDate ? minTime : "00:00"}
                value={formData.time}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded mt-1"
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
