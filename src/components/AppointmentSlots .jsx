import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import appointment from '../services/appointment';

const AppointmentSlots = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD
  });

  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  // Generate slots with both value (24h) and label (12h)
  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 9; // start from 9 AM
    const value = `${String(hour).padStart(2, "0")}:00`;
    const label = new Date(`2000-01-01T${value}`).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return { value, label };
  });

  useEffect(() => {
    const fetchBookedSlots = async () => {
      setLoading(true);
      try {
        const res = await appointment.allAppointment(selectedDate);

        // Extract only HH:mm part from slot
        const booked = res.data.map(app =>
          app.slot.includes(" ") ? app.slot.split(" ")[1] : app.slot
        );

        setBookedSlots(booked);
      } catch (err) {
        console.error("Error fetching slots", err);
        setBookedSlots([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBookedSlots();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleBook = (slotLabel) => {
    navigate("/booking", {
      state: {
        date: selectedDate,
        time: slotLabel, // 12-hour format for Booking.jsx
      },
    });
  };

  // Function to check if a time slot is in the past for today
  const isPastSlot = (slotValue) => {
    if (selectedDate !== new Date().toISOString().split("T")[0]) return false;
    const [hour, minute] = slotValue.split(":").map(Number);
    const now = new Date();
    const slotTime = new Date();
    slotTime.setHours(hour, minute, 0, 0);
    return slotTime <= now;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
          Book Your Appointment
        </h2>

        {/* Date Picker */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Select Date
          </label>
          <input
            type="date"
            min={new Date().toISOString().split("T")[0]}
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Slots */}
        {loading ? (
          <p>Loading slots...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {timeSlots.map((slot, idx) => {
              const isBooked = bookedSlots.includes(slot.value);
              const past = isPastSlot(slot.value);
              const disabled = isBooked || past;

              return (
                <button
                  key={idx}
                  disabled={disabled}
                  onClick={() => handleBook(slot.label)}
                  className={`py-2 px-4 rounded-lg text-sm font-medium transition ${
                    isBooked
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : past
                      ? "bg-gray-300 cursor-not-allowed text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  {slot.label}{" "}
                  {isBooked ? "- Booked" : past ? "- Time Passed" : ""}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentSlots;
